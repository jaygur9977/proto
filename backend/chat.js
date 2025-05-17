const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const { KNN } = require('ml-knn');
const pdfParse = require('pdf-parse');
const { createCanvas, loadImage } = require('canvas');
const natural = require('natural');

const app = express();
app.use(fileUpload());
app.use(express.json());

// Configuration
const UPLOAD_DIR = path.join(__dirname, 'uploads');
const CATEGORIES = {
  NOTES: 'notes',
  REPORT: 'report',
  PROJECT: 'project',
  DIAGRAM: 'diagram',
  OTHER: 'other'
};

// Initialize training data with some basic examples
let trainingData = [];
let knnModel = null;

// Initialize directories
function initDirectories() {
  // Create uploads directory if not exists
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR);
  }

  // Create category directories
  Object.values(CATEGORIES).forEach(category => {
    const dir = path.join(UPLOAD_DIR, category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
}

// Load or initialize training data
function loadTrainingData() {
  try {
    const data = fs.readFileSync('trainingData.json');
    trainingData = JSON.parse(data);
    trainModel();
  } catch (err) {
    console.log('Initializing with default training data');
    trainingData = getDefaultTrainingData();
    trainModel();
    saveTrainingData();
  }
}

// Get default training data (basic examples)
function getDefaultTrainingData() {
  return [
    // PDF examples
    { 
      features: [1, 0, 0, 5000, 5, 1000, 1, 1, 1], 
      category: CATEGORIES.REPORT 
    },
    { 
      features: [1, 0, 0, 3000, 10, 300, 1, 0, 0], 
      category: CATEGORIES.PROJECT 
    },
    { 
      features: [1, 0, 0, 1000, 1, 1000, 0, 0, 0], 
      category: CATEGORIES.NOTES 
    },
    
    // Image examples
    { 
      features: [0, 1, 0, 200000, 150, 0.2], 
      category: CATEGORIES.DIAGRAM 
    },
    { 
      features: [0, 1, 0, 500000, 50, 0.05], 
      category: CATEGORIES.OTHER 
    },
    
    // Text examples
    { 
      features: [0, 0, 1, 5000, 100, 50, 1, 1], 
      category: CATEGORIES.NOTES 
    },
    { 
      features: [0, 0, 1, 10000, 500, 20, 0, 0], 
      category: CATEGORIES.OTHER 
    }
  ];
}

// Train KNN model
function trainModel() {
  if (trainingData.length === 0) return;
  
  const features = trainingData.map(item => item.features);
  const labels = trainingData.map(item => item.category);
  
  knnModel = new KNN(features, labels, { k: 3 });
  console.log(`Model trained with ${trainingData.length} examples`);
}

// Save training data
function saveTrainingData() {
  fs.writeFileSync('trainingData.json', JSON.stringify(trainingData));
}

// Save file to appropriate category directory
function saveFileToCategory(file, category, originalName) {
  const ext = path.extname(originalName);
  const filename = `${Date.now()}${ext}`;
  const dir = path.join(UPLOAD_DIR, category);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  
  const filepath = path.join(dir, filename);
  fs.writeFileSync(filepath, file);
  
  return filepath;
}

// Extract features from file
async function extractFeatures(file) {
  const features = {
    isPDF: 0,
    isImage: 0,
    isText: 0,
    fileSize: file.data.length
  };
  const extension = path.extname(file.name).toLowerCase().slice(1);

  // Set file type flags
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
    features.isImage = 1;
  } else if (extension === 'pdf') {
    features.isPDF = 1;
  } else if (['txt', 'doc', 'docx'].includes(extension)) {
    features.isText = 1;
  }

  try {
    if (features.isImage) {
      const image = await loadImage(file.data);
      const canvas = createCanvas(image.width, image.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      const pixelData = imageData.data;
      
      features.colorVariation = calculateColorVariation(pixelData);
      features.edgeDensity = calculateEdgeDensity(pixelData, image.width, image.height);
    } else if (features.isPDF) {
      const data = await pdfParse(file.data);
      features.pageCount = data.numpages;
      features.textLength = data.text.length;
      
      const wordCount = data.text.split(/\s+/).length;
      features.wordDensity = wordCount / features.pageCount;
      
      features.hasTitle = /title:/i.test(data.text) ? 1 : 0;
      features.hasAbstract = /abstract:/i.test(data.text) ? 1 : 0;
      features.hasReferences = /references:/i.test(data.text) ? 1 : 0;
    } else if (features.isText) {
      const text = file.data.toString('utf8');
      features.wordCount = text.split(/\s+/).length;
      features.lineCount = text.split('\n').length;
      
      features.containsDates = /\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}/.test(text) ? 1 : 0;
      features.containsBullets = (text.includes('•') || text.includes('- ')) ? 1 : 0;
    }
  } catch (err) {
    console.error('Feature extraction error:', err);
    throw new Error('Failed to extract features');
  }

  return Object.values(features);
}

// Classify file
async function classifyFile(file) {
  try {
    const features = await extractFeatures(file);
    
    // If we have a trained model, use it
    if (knnModel) {
      const category = knnModel.predict([features])[0];
      
      // Save the file to the appropriate directory
      const savedPath = saveFileToCategory(file.data, category, file.name);
      
      return { 
        success: true,
        fileType: getFileType(file.name),
        category,
        filePath: savedPath,
        features
      };
    }
    
    // Fallback classification if no model
    const fallbackCategory = getFallbackCategory(features, file.name);
    const savedPath = saveFileToCategory(file.data, fallbackCategory, file.name);
    
    return {
      success: true,
      fileType: getFileType(file.name),
      category: fallbackCategory,
      filePath: savedPath,
      features
    };
    
  } catch (err) {
    console.error('Classification error:', err);
    return {
      success: false,
      error: err.message
    };
  }
}

// API Endpoints
app.post('/api/classify', async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ 
      success: false,
      error: 'No file uploaded' 
    });
  }

  const result = await classifyFile(req.files.file);
  
  if (result.success) {
    res.json(result);
  } else {
    res.status(500).json(result);
  }
});

// Initialize
initDirectories();
loadTrainingData();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Files will be saved to: ${UPLOAD_DIR}`);
});