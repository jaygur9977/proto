import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AttachmentModal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type.startsWith('image/') || selectedFile.type === 'application/pdf')) {
      setFile(selectedFile);
    } else {
      toast.error('Please select an image or PDF file');
      e.target.value = '';
    }
  };

  const showCategoryToast = (filename, fileType) => {
    const nameWithoutExt = filename.split('.').slice(0, -1).join('.');
    const lastChar = nameWithoutExt.slice(-1).toLowerCase();
    
    let category = 'File';
    if (lastChar === 'p') category = 'Presentation';
    else if (lastChar === 't') category = 'Text';
    else if (lastChar === 'd' && fileType.startsWith('image/')) category = 'Diagram';
    
    toast.success(`This ${fileType.startsWith('image/') ? 'image' : 'PDF'} would be saved as ${category}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a file first');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showCategoryToast(file.name, file.type);
      setFile(null);
      onClose();
    } catch (error) {
      console.error('Error:', error);
      toast.error('File processing failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Upload File</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Select File</label>
            <div className="flex items-center">
              <label className="flex flex-col items-center px-4 py-2 bg-gray-700 text-white rounded-lg tracking-wide border border-gray-600 cursor-pointer hover:bg-gray-600 w-full">
                <span className="text-sm truncate max-w-xs">
                  {file ? file.name : 'Choose a file...'}
                </span>
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,.pdf"
                  required
                />
              </label>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Supported: Images and PDFs
              <br />Naming convention:
              <br />• 'p' suffix → Presentation
              <br />• 't' suffix → Text
              <br />• 'd' suffix → Diagram (images only)
            </p>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!file || isLoading}
              className={`px-4 py-2 rounded text-white transition-colors ${
                !file || isLoading
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Processing...' : 'Upload'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttachmentModal;