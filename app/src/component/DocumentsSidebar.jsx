import React, { useState } from 'react';

const documentTypes = {
  notes: { icon: '📝', label: 'Class Notes' },
  pyq: { icon: '📚', label: 'PYQs' },
  photo: { icon: '📷', label: 'Photos' },
  pdf: { icon: '📄', label: 'PDFs' },
  other: { icon: '📁', label: 'Others' }
};

const DocumentsSidebar = ({ isOpen, onClose, documents, onDelete }) => {
  const [activeFilter, setActiveFilter] = useState({ type: 'all', year: '', semester: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(null);

  const years = ['1', '2', '3', '4'];
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const filteredDocuments = documents.filter(doc => {
    // Filter by type
    const typeMatch = activeFilter.type === 'all' || doc.type === activeFilter.type;
    
    // Filter by year if specified
    const yearMatch = !activeFilter.year || 
                     (doc.details?.year === activeFilter.year);
    
    // Filter by semester if specified
    const semesterMatch = !activeFilter.semester || 
                         (doc.details?.semester === activeFilter.semester);
    
    // Filter by search term
    const searchMatch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       doc.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       (doc.details?.subject && doc.details.subject.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return typeMatch && yearMatch && semesterMatch && searchMatch;
  });

  const getDocumentCount = (type) => {
    return documents.filter(doc => doc.type === type).length;
  };

  const handleFilterChange = (filter, value) => {
    setActiveFilter(prev => ({ ...prev, [filter]: value }));
    setSelectedDoc(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      onDelete(id);
      if (selectedDoc && selectedDoc.id === id) {
        setSelectedDoc(null);
      }
    }
  };

  return (
    <div className={`fixed inset-y-0 right-0 z-50 bg-gray-800 w-96 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-xl flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Group Documents</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          ✕
        </button>
      </div>
      
      {/* Search and Filters */}
      <div className="p-3 border-b border-gray-700">
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-700 text-white rounded px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="flex flex-wrap gap-2 mb-2">
          <select
            value={activeFilter.year}
            onChange={(e) => handleFilterChange('year', e.target.value)}
            className="bg-gray-700 text-white rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>Year {year}</option>
            ))}
          </select>
          
          <select
            value={activeFilter.semester}
            onChange={(e) => handleFilterChange('semester', e.target.value)}
            className="bg-gray-700 text-white rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Semesters</option>
            {semesters.map(sem => (
              <option key={sem} value={sem}>Sem {sem}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Document Type Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-700 bg-gray-900">
        <button
          onClick={() => handleFilterChange('type', 'all')}
          className={`px-4 py-3 text-sm whitespace-nowrap flex flex-col items-center ${activeFilter.type === 'all' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'} transition-colors`}
        >
          <span className="text-lg">📦</span>
          <span>All ({documents.length})</span>
        </button>
        {Object.entries(documentTypes).map(([type, { icon, label }]) => (
          <button
            key={type}
            onClick={() => handleFilterChange('type', type)}
            className={`px-4 py-3 text-sm whitespace-nowrap flex flex-col items-center ${activeFilter.type === type ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'} transition-colors`}
          >
            <span className="text-lg">{icon}</span>
            <span>{label} ({getDocumentCount(type)})</span>
          </button>
        ))}
      </div>
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Document List */}
        <div className={`${selectedDoc ? 'w-1/2' : 'w-full'} border-r border-gray-700 overflow-y-auto`}>
          {filteredDocuments.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              No documents found
            </div>
          ) : (
            <div className="divide-y divide-gray-700">
              {filteredDocuments.map(doc => (
                <div 
                  key={doc.id} 
                  className={`p-3 hover:bg-gray-700 cursor-pointer ${selectedDoc?.id === doc.id ? 'bg-gray-700' : ''} transition-colors`}
                  onClick={() => setSelectedDoc(doc)}
                >
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">
                      {documentTypes[doc.type].icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{doc.name}</p>
                      <p className="text-gray-400 text-xs">Sent by {doc.sender}</p>
                      {(doc.type === 'notes' || doc.type === 'pyq') && doc.details && (
                        <div className="flex flex-wrap gap-x-2 mt-1 text-xs text-gray-300">
                          <span>Y{doc.details.year}</span>
                          <span>S{doc.details.semester}</span>
                          {doc.details.subject && <span>{doc.details.subject}</span>}
                          {doc.details.chapter && <span>Ch{doc.details.chapter}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Document Preview */}
        {selectedDoc && (
          <div className="w-1/2 p-4 overflow-y-auto">
            <div className="bg-gray-700 rounded-lg p-4 mb-3">
              <div className="flex items-center mb-3">
                <div className="text-3xl mr-3">
                  {documentTypes[selectedDoc.type].icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedDoc.name}</h3>
                  <p className="text-gray-400 text-sm">Sent by {selectedDoc.sender}</p>
                </div>
              </div>
              
              {(selectedDoc.type === 'notes' || selectedDoc.type === 'pyq') && selectedDoc.details && (
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <span className="text-gray-400">Year:</span> {selectedDoc.details.year}
                  </div>
                  <div>
                    <span className="text-gray-400">Semester:</span> {selectedDoc.details.semester}
                  </div>
                  {selectedDoc.details.subject && (
                    <div className="col-span-2">
                      <span className="text-gray-400">Subject:</span> {selectedDoc.details.subject}
                    </div>
                  )}
                  {selectedDoc.details.chapter && (
                    <div className="col-span-2">
                      <span className="text-gray-400">Chapter:</span> {selectedDoc.details.chapter}
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>
                  {new Date(selectedDoc.timestamp).toLocaleDateString()}
                </span>
                <div className="flex gap-2">
                  <a 
                    href={selectedDoc.file} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Open
                  </a>
                  <a 
                    href={selectedDoc.file} 
                    download={selectedDoc.name}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Download
                  </a>
                  <button 
                    onClick={() => handleDelete(selectedDoc.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 h-64 flex items-center justify-center">
              {selectedDoc.type === 'photo' ? (
                <img 
                  src={selectedDoc.file} 
                  alt={selectedDoc.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : selectedDoc.type === 'pdf' ? (
                <iframe 
                  src={selectedDoc.file} 
                  title={selectedDoc.name}
                  className="w-full h-full"
                  frameBorder="0"
                />
              ) : (
                <div className="text-center text-gray-500">
                  <div className="text-5xl mb-2">
                    {documentTypes[selectedDoc.type].icon}
                  </div>
                  <p>Preview not available</p>
                  <a 
                    href={selectedDoc.file} 
                    download={selectedDoc.name}
                    className="text-blue-400 hover:text-blue-300 text-sm mt-2 block"
                  >
                    Download File
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsSidebar;