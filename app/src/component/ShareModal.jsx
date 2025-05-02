import React from 'react';

const ShareModal = ({ group, onClose }) => {
  const copyToClipboard = () => {
    if (!group) return;
    
    const shareText = group.type === 'private' 
      ? `Join my private group "${group.name}" using password: ${group.password}`
      : `Join my public group "${group.name}"`;
    
    navigator.clipboard.writeText(shareText);
    alert('Group details copied to clipboard!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-white mb-4">Share Group</h3>
        <div className="bg-gray-700 p-4 rounded mb-4">
          <div className="flex items-center mb-3">
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">
              {group.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4 className="font-bold text-white">{group.name}</h4>
              <p className="text-gray-300 text-sm">
                {group.type === 'private' ? 'Private Group' : 'Public Group'}
              </p>
            </div>
          </div>
          
          {group.type === 'private' && (
            <div className="mt-3">
              <p className="text-gray-300 mb-1">Invitation Password:</p>
              <div className="flex items-center">
                <code className="font-mono bg-gray-800 px-3 py-2 rounded flex-1">
                  {group.password}
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(group.password);
                    alert('Password copied!');
                  }}
                  className="ml-2 bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded"
                >
                  Copy
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Share this password only with people you want to invite
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Copy Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;