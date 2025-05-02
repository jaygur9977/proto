import React, { useState } from 'react';

const AttachmentModal = ({ isOpen, onClose, onSendAttachment }) => {
  const [attachmentType, setAttachmentType] = useState('notes');
  const [file, setFile] = useState(null);
  const [senderName, setSenderName] = useState('');
  const [details, setDetails] = useState({
    year: '1',
    semester: '1',
    subject: '',
    chapter: '1'
  });

  const years = ['1', '2', '3', '4'];
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const chapters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !senderName.trim()) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const attachment = {
        id: Date.now(),
        type: attachmentType,
        name: file.name,
        file: event.target.result, // Store as base64 string
        sender: senderName,
        timestamp: new Date().toISOString(),
        details: {
          ...details,
          subject: details.subject.trim()
        }
      };
      
      onSendAttachment(attachment);
      // Reset form
      setFile(null);
      setSenderName('');
      setDetails({
        year: '1',
        semester: '1',
        subject: '',
        chapter: '1'
      });
      onClose();
    };
    
    reader.readAsDataURL(file);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Send Attachment</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Attachment Type</label>
            <select 
              value={attachmentType}
              onChange={(e) => setAttachmentType(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="notes">Class Notes</option>
              <option value="pyq">Previous Year Questions</option>
              <option value="photo">Photo</option>
              <option value="pdf">PDF Document</option>
              <option value="other">Other</option>
            </select>
          </div>

          {(attachmentType === 'notes' || attachmentType === 'pyq') && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Year</label>
                <select
                  value={details.year}
                  onChange={(e) => setDetails({...details, year: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {years.map(year => (
                    <option key={year} value={year}>Year {year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Semester</label>
                <select
                  value={details.semester}
                  onChange={(e) => setDetails({...details, semester: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {semesters.map(sem => (
                    <option key={sem} value={sem}>Sem {sem}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-gray-300 mb-1 text-sm">Subject</label>
                <input 
                  type="text" 
                  value={details.subject}
                  onChange={(e) => setDetails({...details, subject: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Enter subject name"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-300 mb-1 text-sm">Chapter</label>
                <select
                  value={details.chapter}
                  onChange={(e) => setDetails({...details, chapter: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {chapters.map(ch => (
                    <option key={ch} value={ch}>Chapter {ch}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Select File</label>
            <div className="flex items-center">
              <label className="flex flex-col items-center px-4 py-2 bg-gray-700 text-white rounded-lg tracking-wide border border-gray-600 cursor-pointer hover:bg-gray-600">
                <span className="text-sm">{file ? file.name : 'Choose a file'}</span>
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  className="hidden"
                  accept={attachmentType === 'photo' ? 'image/*' : attachmentType === 'pdf' ? '.pdf' : '*'}
                  required
                />
              </label>
            </div>
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
              disabled={!file || !senderName.trim()}
              className={`px-4 py-2 rounded transition-colors ${
                !file || !senderName.trim() 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttachmentModal;