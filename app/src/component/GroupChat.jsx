

// import { useState, useEffect } from 'react';
// import MembersSidebar from './MembersSidebar';
// import ShareModal from './ShareModal';
// import DocumentsSidebar from './DocumentsSidebar';
// import AttachmentModal from './AttachmentModal';

// const GroupChat = ({ group, onClose }) => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [documents, setDocuments] = useState([]);
//   const [members, setMembers] = useState([]);
//   const [showShareModal, setShowShareModal] = useState(false);
//   const [showMembersSidebar, setShowMembersSidebar] = useState(false);
//   const [showDocumentsSidebar, setShowDocumentsSidebar] = useState(false);
//   const [showAttachmentModal, setShowAttachmentModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!group) {
//       setIsLoading(false);
//       return;
//     }

//     setIsLoading(true);
    
//     const loadData = () => {
//       // Load messages
//       const savedMessages = localStorage.getItem(`groupify_messages_${group.id}`);
//       setMessages(savedMessages ? JSON.parse(savedMessages) : []);
      
//       // Load documents
//       const savedDocs = localStorage.getItem(`groupify_documents_${group.id}`);
//       setDocuments(savedDocs ? JSON.parse(savedDocs) : []);
      
//       // Load real members
//       setMembers([
//         { id: 1, name: 'Alex Johnson', role: 'Admin', avatar: 'A' },
//         { id: 2, name: 'Sam Wilson', role: 'Moderator', avatar: 'S' },
//         { id: 3, name: 'Taylor Smith', role: 'Member', avatar: 'T' },
//         { id: 4, name: 'Jordan Lee', role: 'Member', avatar: 'J' }
//       ]);
//     };

//     loadData();
    
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [group]);

//   const handleSendMessage = () => {
//     if (!message.trim() || !group) return;
    
//     const newMessage = {
//       id: Date.now(),
//       text: message,
//       sender: 'You',
//       timestamp: new Date().toISOString(),
//       isUser: true
//     };
    
//     const updatedMessages = [...messages, newMessage];
//     setMessages(updatedMessages);
//     localStorage.setItem(`groupify_messages_${group.id}`, JSON.stringify(updatedMessages));
//     setMessage('');
//   };

//   const handleSendAttachment = (attachment) => {
//     if (!group) return;
    
//     const newDocument = {
//       id: Date.now(),
//       name: attachment.file.name,
//       type: attachment.type,
//       sender: 'You',
//       timestamp: new Date().toISOString(),
//       details: attachment.details
//     };
    
//     const newMessage = {
//       id: Date.now() + 1,
//       text: `Sent a ${documentTypes[attachment.type]}: ${attachment.file.name}`,
//       sender: 'You',
//       timestamp: new Date().toISOString(),
//       isUser: true,
//       hasAttachment: true,
//       attachmentId: newDocument.id
//     };
    
//     const updatedDocs = [...documents, newDocument];
//     const updatedMessages = [...messages, newMessage];
    
//     setDocuments(updatedDocs);
//     setMessages(updatedMessages);
    
//     localStorage.setItem(`groupify_documents_${group.id}`, JSON.stringify(updatedDocs));
//     localStorage.setItem(`groupify_messages_${group.id}`, JSON.stringify(updatedMessages));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   if (!group) {
//     return (
//       <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
//         <div className="text-white text-xl">No group selected</div>
//         <button 
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
//         >
//           ✕
//         </button>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
//         <div className="text-white text-xl">Loading group chat...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
//       {/* Sidebars */}
//       <MembersSidebar 
//         members={members} 
//         isOpen={showMembersSidebar} 
//         onClose={() => setShowMembersSidebar(false)} 
//       />
      
//       <DocumentsSidebar
//         documents={documents}
//         isOpen={showDocumentsSidebar}
//         onClose={() => setShowDocumentsSidebar(false)}
//       />
      
//       {/* Attachment Modal */}
//       <AttachmentModal
//         isOpen={showAttachmentModal}
//         onClose={() => setShowAttachmentModal(false)}
//         onSendAttachment={handleSendAttachment}
//       />
      
//       {/* Share Modal */}
//       {showShareModal && (
//         <ShareModal 
//           group={group} 
//           onClose={() => setShowShareModal(false)} 
//         />
//       )}

//       {/* Header */}
//       <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
//         <div className="flex items-center">
//           <button 
//             onClick={() => setShowMembersSidebar(true)}
//             className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3 cursor-pointer"
//           >
//             {group.name.charAt(0).toUpperCase()}
//           </button>
//           <div>
//             <h2 className="text-xl font-bold text-white">{group.name}</h2>
//             <p className="text-gray-400 text-sm">
//               {group.type === 'private' ? 'Private' : 'Public'} • {members.length} member{members.length !== 1 ? 's' : ''}
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={() => setShowDocumentsSidebar(true)}
//             className="text-gray-400 hover:text-white p-2"
//             title="View documents"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//           </button>
//           <button 
//             onClick={onClose}
//             className="text-gray-400 hover:text-white p-2"
//           >
//             ✕
//           </button>
//         </div>
//       </div>

//       {/* Messages area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-full text-gray-500">
//             <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//             </svg>
//             <p>No messages yet</p>
//             <p className="text-sm">Start the conversation!</p>
//           </div>
//         ) : (
//           messages.map(msg => (
//             <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
//               <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${
//                 msg.sender === 'You' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
//               }`}>
//                 <p>{msg.text}</p>
//                 {msg.hasAttachment && (
//                   <div className="mt-2 p-2 bg-black bg-opacity-20 rounded">
//                     <p className="text-xs text-blue-300">📎 Attachment included</p>
//                   </div>
//                 )}
//                 <p className="text-xs opacity-70 mt-1">
//                   {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Message input */}
//       <div className="bg-gray-800 p-4 border-t border-gray-700">
//         <div className="flex space-x-2 mb-2">
//           <button 
//             onClick={() => setShowAttachmentModal(true)}
//             className="p-2 text-gray-400 hover:text-white"
//             title="Attach file"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
//             </svg>
//           </button>
//           <button className="p-2 text-gray-400 hover:text-white">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex space-x-2">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyPress={handleKeyPress}
//             className="flex-1 bg-gray-700 rounded-full px-4 py-2 text-white focus:outline-none"
//             placeholder="Type a message..."
//           />
//           <button
//             onClick={handleSendMessage}
//             disabled={!message.trim()}
//             className={`px-4 py-2 rounded-full ${
//               message.trim() ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
//             }`}
//           >
//             Send
//           </button>
//           <button
//             onClick={() => setShowShareModal(true)}
//             className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-full"
//             title="Share group"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupChat;


import { useState, useEffect, useRef } from 'react';
import MembersSidebar from './MembersSidebar';
import ShareModal from './ShareModal';
import DocumentsSidebar from './DocumentsSidebar';
import AttachmentModal from './AttachmentModal';

const documentTypes = {
  notes: { icon: '📝', label: 'Class Notes' },
  pyq: { icon: '📚', label: 'PYQs' },
  photo: { icon: '📷', label: 'Photos' },
  pdf: { icon: '📄', label: 'PDFs' },
  other: { icon: '📁', label: 'Others' }
};

const GroupChat = ({ group, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [members, setMembers] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showMembersSidebar, setShowMembersSidebar] = useState(false);
  const [showDocumentsSidebar, setShowDocumentsSidebar] = useState(false);
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(384); // Default width 384px (w-96)
  const sidebarRef = useRef(null);
  const dragHandleRef = useRef(null);

  useEffect(() => {
    if (!group) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    const loadData = () => {
      // Load messages
      const savedMessages = localStorage.getItem(`groupify_messages_${group.id}`);
      setMessages(savedMessages ? JSON.parse(savedMessages) : []);
      
      // Load documents
      const savedDocs = localStorage.getItem(`groupify_documents_${group.id}`);
      if (savedDocs) {
        const parsedDocs = JSON.parse(savedDocs);
        const processedDocs = parsedDocs.map(doc => {
          if (doc.file instanceof File) {
            return {
              ...doc,
              file: URL.createObjectURL(doc.file)
            };
          }
          return doc;
        });
        setDocuments(processedDocs);
      } else {
        setDocuments([]);
      }
      
      // Load members
      setMembers([
        { id: 1, name: 'Alex Johnson', role: 'Admin' },
        { id: 2, name: 'Sam Wilson', role: 'Moderator' },
        { id: 3, name: 'Taylor Smith', role: 'Member' },
        { id: 4, name: 'Jordan Lee', role: 'Member' }
      ]);
    };

    loadData();
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [group]);

  useEffect(() => {
    // Set up resizable sidebar
    const handleMouseDown = (e) => {
      e.preventDefault();
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
      if (!sidebarRef.current) return;
      
      const newWidth = window.innerWidth - e.clientX;
      // Limit width between 256px and 768px
      const clampedWidth = Math.min(Math.max(newWidth, 256), 768);
      setSidebarWidth(clampedWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const dragHandle = dragHandleRef.current;
    if (dragHandle) {
      dragHandle.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (dragHandle) {
        dragHandle.removeEventListener('mousedown', handleMouseDown);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleSendMessage = () => {
    if (!message.trim() || !group) return;
    
    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'You',
      timestamp: new Date().toISOString(),
      isUser: true
    };
    
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(`groupify_messages_${group.id}`, JSON.stringify(updatedMessages));
    setMessage('');
  };

  const handleSendAttachment = (attachment) => {
    if (!group) return;
    
    const newDocument = {
      id: attachment.id,
      type: attachment.type,
      name: attachment.name,
      file: attachment.file,
      sender: attachment.sender,
      timestamp: attachment.timestamp,
      details: attachment.details
    };
    
    const newMessage = {
      id: Date.now() + 1,
      text: `Sent ${documentTypes[attachment.type].label.toLowerCase()}: ${attachment.name}`,
      sender: attachment.sender,
      timestamp: new Date().toISOString(),
      isUser: true,
      hasAttachment: true,
      attachmentId: attachment.id
    };
    
    const updatedDocs = [...documents, newDocument];
    const updatedMessages = [...messages, newMessage];
    
    setDocuments(updatedDocs);
    setMessages(updatedMessages);
    
    localStorage.setItem(`groupify_documents_${group.id}`, JSON.stringify(updatedDocs));
    localStorage.setItem(`groupify_messages_${group.id}`, JSON.stringify(updatedMessages));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!group) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">No group selected</div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
        >
          ✕
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading group chat...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      {/* Sidebars */}
      <MembersSidebar 
        members={members} 
        isOpen={showMembersSidebar} 
        onClose={() => setShowMembersSidebar(false)} 
      />
      
      {/* Resizable Documents Sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed inset-y-0 right-0 z-50 bg-gray-800 transform ${
          showDocumentsSidebar ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-xl flex flex-col`}
        style={{ width: `${sidebarWidth}px` }}
      >
        <div 
          ref={dragHandleRef}
          className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize bg-transparent hover:bg-blue-500 active:bg-blue-600 transition-colors"
          style={{ marginLeft: '-2px' }}
        />
        <DocumentsSidebar
          documents={documents}
          isOpen={showDocumentsSidebar}
          onClose={() => setShowDocumentsSidebar(false)}
          width={sidebarWidth}
        />
      </div>
      
      {/* Attachment Modal */}
      <AttachmentModal
        isOpen={showAttachmentModal}
        onClose={() => setShowAttachmentModal(false)}
        onSendAttachment={handleSendAttachment}
      />
      
      {/* Share Modal */}
      {showShareModal && (
        <ShareModal 
          group={group} 
          onClose={() => setShowShareModal(false)} 
        />
      )}

      {/* Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center">
          <button 
            onClick={() => setShowMembersSidebar(true)}
            className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3 cursor-pointer"
          >
            {group.name.charAt(0).toUpperCase()}
          </button>
          <div>
            <h2 className="text-xl font-bold text-white">{group.name}</h2>
            <p className="text-gray-400 text-sm">
              {group.type === 'private' ? 'Private' : 'Public'} • {members.length} member{members.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowDocumentsSidebar(true)}
            className="text-gray-400 hover:text-white p-2"
            title="View documents"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p>No messages yet</p>
            <p className="text-sm">Start the conversation!</p>
          </div>
        ) : (
          messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                msg.sender === 'You' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
              }`}>
                <p>{msg.text}</p>
                {msg.hasAttachment && (
                  <button 
                    onClick={() => {
                      setShowDocumentsSidebar(true);
                      // You could add logic here to highlight the specific document
                    }}
                    className="mt-2 p-2 bg-black bg-opacity-20 rounded flex items-center hover:bg-opacity-30 transition-colors"
                  >
                    <span className="mr-2">📎</span>
                    <span className="text-xs text-blue-300">View document</span>
                  </button>
                )}
                <p className="text-xs opacity-70 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Message input with attachment button integrated */}
      <div className="bg-gray-800 p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <button
            onClick={() => setShowAttachmentModal(true)}
            className="p-2 text-gray-400 hover:text-white rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            title="Attach file"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-gray-700 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className={`px-4 py-2 rounded-full transition-colors ${
              message.trim() ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;