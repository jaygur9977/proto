import { useState, useEffect } from 'react';
import GroupChat from './GroupChat';

const Makegroup = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupType, setGroupType] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [groupPassword, setGroupPassword] = useState('');
  const [createdGroups, setCreatedGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 10);
    
    const savedGroups = localStorage.getItem('groupify_groups');
    if (savedGroups) {
      setCreatedGroups(JSON.parse(savedGroups));
    }
  }, []);

  const generateRandomPassword = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleCreateGroup = () => {
    if (groupType === 'private' && (!groupName || !groupPassword)) {
      alert('Please enter group name and password');
      return;
    }

    const newGroup = {
      id: Date.now(),
      type: groupType,
      name: groupType === 'public' ? `Public Group ${createdGroups.length + 1}` : groupName,
      password: groupType === 'private' ? groupPassword : null,
      createdAt: new Date().toISOString(),
      members: 1
    };

    const updatedGroups = [...createdGroups, newGroup];
    setCreatedGroups(updatedGroups);
    localStorage.setItem('groupify_groups', JSON.stringify(updatedGroups));

    setGroupType(null);
    setGroupName('');
    setGroupPassword('');
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  const handleOpenGroup = (group) => {
    setSelectedGroup(group);
  };

  const handleBackToGroups = () => {
    setSelectedGroup(null);
  };

  const handlehome = () => {
    window.location.href = '/';
  };

  if (selectedGroup) {
    return (
      <GroupChat 
        group={selectedGroup} 
        onClose={handleBackToGroups}
        handlehome={handlehome}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      <div 
        className={`absolute left-0 top-0 h-full w-full max-w-md bg-gray-800 shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Group Chat</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {!groupType ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Create New Group</h3>
                
                <div 
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    groupType === 'public' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => setGroupType('public')}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      🌐
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Public Group</h4>
                      <p className="text-gray-300 text-sm">Anyone can join without password</p>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    groupType === 'private' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => {
                    setGroupType('private');
                    setGroupPassword(generateRandomPassword());
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      🔒
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Private Group</h4>
                      <p className="text-gray-300 text-sm">Invite-only with password</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <button 
                  onClick={() => setGroupType(null)}
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  ← Back to group type selection
                </button>

                <h3 className="text-lg font-semibold text-white">
                  {groupType === 'public' ? 'Public Group' : 'Private Group'} Settings
                </h3>

                {groupType === 'private' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Group Name</label>
                      <input
                        type="text"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        className="w-full bg-gray-700 rounded px-3 py-2 text-white"
                        placeholder="Enter group name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Group Password</label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={groupPassword}
                          readOnly
                          className="flex-1 bg-gray-700 rounded-l px-3 py-2 text-white"
                        />
                        <button
                          onClick={() => setGroupPassword(generateRandomPassword())}
                          className="bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-r text-white"
                        >
                          Regenerate
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        Share this password with members you want to invite
                      </p>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleCreateGroup}
                  className={`w-full py-2 rounded-md font-medium ${
                    groupType === 'private' && (!groupName || !groupPassword)
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white transition-colors`}
                  disabled={groupType === 'private' && (!groupName || !groupPassword)}
                >
                  {groupType === 'public' ? 'Create Public Group' : 'Create Private Group'}
                </button>
              </div>
            )}

            {createdGroups.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Your Groups</h3>
                <div className="space-y-3">
                  {createdGroups.map(group => (
                    <div 
                      key={group.id} 
                      className="bg-gray-700 rounded-lg p-3 cursor-pointer hover:bg-gray-600"
                      onClick={() => handleOpenGroup(group)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-white">{group.name}</h4>
                          <p className="text-gray-300 text-sm">
                            {group.type === 'public' ? 'Public' : 'Private'} • {group.members} member(s)
                          </p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          group.type === 'public' ? 'bg-blue-900 text-blue-200' : 'bg-purple-900 text-purple-200'
                        }`}>
                          {group.type}
                        </span>
                      </div>
                      {group.type === 'private' && (
                        <div className="mt-2 text-xs bg-gray-800 p-2 rounded text-gray-300">
                          Password: <span className="font-mono">{group.password}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makegroup;