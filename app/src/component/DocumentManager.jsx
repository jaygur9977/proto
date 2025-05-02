import React, { useState, useEffect } from 'react';
import AttachmentModal from './AttachmentModal';
import DocumentsSidebar from './DocumentsSidebar';

const DocumentManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [documents, setDocuments] = useState([]);

  // Load documents from localStorage on component mount
  useEffect(() => {
    const savedDocuments = localStorage.getItem('groupDocuments');
    if (savedDocuments) {
      try {
        setDocuments(JSON.parse(savedDocuments));
      } catch (error) {
        console.error('Error parsing saved documents:', error);
      }
    }
  }, []);

  // Save documents to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('groupDocuments', JSON.stringify(documents));
  }, [documents]);

  const handleSendAttachment = (attachment) => {
    setDocuments(prev => [attachment, ...prev]);
  };

  const deleteDocument = (id) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="flex gap-2">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Add document"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-colors relative"
          aria-label="View documents"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {documents.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {documents.length}
            </span>
          )}
        </button>
      </div>

      <AttachmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSendAttachment={handleSendAttachment}
      />
      
      <DocumentsSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        documents={documents}
        onDelete={deleteDocument}
      />
    </div>
  );
};

export default DocumentManager;