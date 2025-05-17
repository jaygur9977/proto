// // const express = require('express');
// // const fileUpload = require('express-fileupload');
// // const fs = require('fs');
// // const path = require('path');

// // const app = express();
// // app.use(fileUpload());
// // app.use(express.json());

// // // Configuration
// // const UPLOAD_BASE_DIR = path.join(__dirname, 'uploads');

// // // Folder structure based on last letter
// // const FOLDER_MAPPING = {
// //   't': 'text-pdf',
// //   'p': 'presentation',
// //   'default': 'other-documents'
// // };

// // // Initialize directories
// // function initDirectories() {
// //   if (!fs.existsSync(UPLOAD_BASE_DIR)) {
// //     fs.mkdirSync(UPLOAD_BASE_DIR);
// //   }

// //   // Create all needed folders
// //   Object.values(FOLDER_MAPPING).forEach(folder => {
// //     const dir = path.join(UPLOAD_BASE_DIR, folder);
// //     if (!fs.existsSync(dir)) {
// //       fs.mkdirSync(dir, { recursive: true });
// //     }
// //   });
// // }

// // // Determine folder based on filename
// // function getTargetFolder(filename) {
// //   if (!filename || typeof filename !== 'string') {
// //     return FOLDER_MAPPING.default;
// //   }

// //   const cleanName = filename.trim().toLowerCase();
// //   const lastChar = cleanName.slice(-1);

// //   if (lastChar === 't' && cleanName.endsWith('.pdf')) {
// //     return FOLDER_MAPPING['t']; // text-pdf
// //   } else if (lastChar === 'p' && cleanName.endsWith('.pdf')) {
// //     return FOLDER_MAPPING['p']; // presentation
// //   }

// //   return FOLDER_MAPPING.default;
// // }

// // // Save file to appropriate folder
// // function saveFile(fileBuffer, originalName) {
// //   try {
// //     const targetFolder = getTargetFolder(originalName);
// //     const dir = path.join(UPLOAD_BASE_DIR, targetFolder);
    
// //     if (!fs.existsSync(dir)) {
// //       fs.mkdirSync(dir, { recursive: true });
// //     }
    
// //     const filename = `${Date.now()}-${originalName}`;
// //     const filePath = path.join(dir, filename);
// //     fs.writeFileSync(filePath, fileBuffer);
    
// //     return {
// //       success: true,
// //       filePath,
// //       folder: targetFolder,
// //       originalName
// //     };
// //   } catch (err) {
// //     console.error('Error saving file:', err);
// //     return {
// //       success: false,
// //       error: 'Failed to save file'
// //     };
// //   }
// // }

// // // API Endpoint for file upload
// // app.post('/api/upload', async (req, res) => {
// //   if (!req.files || !req.files.document) {
// //     return res.status(400).json({ 
// //       success: false,
// //       error: 'No file uploaded' 
// //     });
// //   }

// //   const file = req.files.document;
// //   const result = saveFile(file.data, file.name);

// //   if (result.success) {
// //     res.json({
// //       success: true,
// //       message: `File saved to ${result.folder} folder`,
// //       filePath: result.filePath,
// //       fileName: result.originalName
// //     });
// //   } else {
// //     res.status(500).json(result);
// //   }
// // });

// // // Serve uploaded files statically
// // app.use('/uploads', express.static(UPLOAD_BASE_DIR));

// // // Initialize
// // initDirectories();

// // const PORT = 1010;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// //   console.log(`Upload directory: ${UPLOAD_BASE_DIR}`);
// //   console.log('Folder mapping:');
// //   console.log('- Files ending with "t.pdf" -> text-pdf folder');
// //   console.log('- Files ending with "p.pdf" -> presentation folder');
// //   console.log('- All other files -> other-documents folder');
// // });




// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/docu', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// // File Schema and Model
// const fileSchema = new mongoose.Schema({
//   filename: String,
//   originalname: String,
//   mimetype: String,
//   size: Number,
//   fileType: String,  // 'image', 'pdf', 'document'
//   category: String,  // 'text', 'presentation', 'notes', 'diagram'
//   filePath: String,
//   features: Object,
//   timestamp: { type: Date, default: Date.now }
// });

// const File = mongoose.model('File', fileSchema);

// // File Storage Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// // Classification Logic
// const classifyFile = (filename, mimetype) => {
//   const extension = path.extname(filename).toLowerCase();
//   const isImage = mimetype.startsWith('image/');
//   const isPDF = mimetype === 'application/pdf';
//   const isDocument = [
//     'application/msword',
//     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//     'text/plain'
//   ].includes(mimetype);

//   let fileType, category;

//   // Determine file type
//   if (isImage) fileType = 'image';
//   else if (isPDF) fileType = 'pdf';
//   else if (isDocument) fileType = 'document';
//   else fileType = 'other';

//   // Determine category based on naming convention
//   if (filename.toLowerCase().endsWith('t')) {
//     category = 'text';
//   } else if (filename.toLowerCase().endsWith('p')) {
//     category = 'presentation';
//   } else if (filename.toLowerCase().endsWith('n')) {
//     category = 'notes';
//   } else if (filename.toLowerCase().endsWith('d') && isImage) {
//     category = 'diagram';
//   } else {
//     // Default category based on file type
//     category = isImage ? 'diagram' : 
//                isPDF ? 'document' : 
//                isDocument ? 'text' : 'other';
//   }

//   return { fileType, category };
// };

// // API Endpoints
// app.post('/api/classify', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     const { fileType, category } = classifyFile(req.file.originalname, req.file.mimetype);
    
//     // Extract basic features (can be enhanced)
//     const features = {
//       size: req.file.size,
//       extension: path.extname(req.file.originalname),
//       type: fileType
//     };

//     // Save to database
//     const newFile = new File({
//       filename: req.file.filename,
//       originalname: req.file.originalname,
//       mimetype: req.file.mimetype,
//       size: req.file.size,
//       fileType,
//       category,
//       filePath: req.file.path,
//       features
//     });

//     await newFile.save();

//     res.json({
//       fileType,
//       category,
//       features,
//       name: req.file.originalname,
//       id: newFile._id
//     });
//   } catch (error) {
//     console.error('Classification error:', error);
//     res.status(500).json({ error: 'File classification failed' });
//   }
// });

// app.get('/api/files', async (req, res) => {
//   try {
//     const files = await File.find().sort({ timestamp: -1 });
//     res.json(files);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch files' });
//   }
// });

// app.get('/api/files/:category', async (req, res) => {
//   try {
//     const files = await File.find({ category: req.params.category }).sort({ timestamp: -1 });
//     res.json(files);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch files' });
//   }
// });

// // Serve uploaded files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Start server
// const PORT =  5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/uploderpdf', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// PDF Schema
const pdfSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  size: Number,
  path: String,
  uploadedAt: { type: Date, default: Date.now }
});

const PDF = mongoose.model('PDF', pdfSchema);

// File Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Upload Endpoint with 5-second delay
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Simulate 5-second processing delay
    await new Promise(resolve => setTimeout(resolve, 5000));

    const newPDF = new PDF({
      filename: req.file.filename,
      originalname: req.file.originalname,
      size: req.file.size,
      path: req.file.path
    });

    await newPDF.save();

    res.status(200).json({ 
      success: true,
      filename: req.file.originalname,
      message: 'PDF uploaded successfully'
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: error.message || 'PDF upload failed' });
  }
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});