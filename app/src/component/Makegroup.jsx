import { useState, useEffect } from 'react';
import GroupChat from './GroupChat';

const Makegroup = ({ onClose }) => {


  const handleHome = () => {
    window.location.href = '/';
  };
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState(null); // 'join' or 'create'
  const [groupType, setGroupType] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [groupPassword, setGroupPassword] = useState('');
  const [joinGroupId, setJoinGroupId] = useState('');
  const [joinGroupPassword, setJoinGroupPassword] = useState('');
  const [createdGroups, setCreatedGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 10);
    
    const savedGroups = localStorage.getItem('groupify_groups');
    if (savedGroups) {
      setCreatedGroups(JSON.parse(savedGroups));
    }

    // Set theme based on time of day or preference
    const hours = new Date().getHours();
    setTheme(hours > 6 && hours < 18 ? 'light' : 'dark');
  }, []);

  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleCreateGroup = () => {
    if (groupType === 'private' && (!groupName || !groupPassword)) {
      alert('Please enter group name and password');
      return;
    }

    const newGroup = {
      id: Date.now().toString(),
      type: groupType,
      name: groupType === 'public' ? `Public Group ${createdGroups.length + 1}` : groupName,
      password: groupType === 'private' ? groupPassword : null,
      createdAt: new Date().toISOString(),
      members: 1,
      admin: true, // Mark the creator as admin
      theme: groupType === 'public' ? 'blue' : 'purple' // Default themes
    };

    const updatedGroups = [...createdGroups, newGroup];
    setCreatedGroups(updatedGroups);
    localStorage.setItem('groupify_groups', JSON.stringify(updatedGroups));

    setGroupType(null);
    setGroupName('');
    setGroupPassword('');
    setActionType(null);
  };

  const handleJoinGroup = () => {
    if (groupType === 'private' && !joinGroupPassword) {
      alert('Please enter the group password');
      return;
    }

    // In a real app, you would verify the group exists and password matches
    const joinedGroup = {
      id: joinGroupId || `public-${Date.now()}`,
      type: groupType,
      name: groupType === 'public' ? `Public Group ${createdGroups.length + 1}` : `Private Group ${createdGroups.length + 1}`,
      password: groupType === 'private' ? joinGroupPassword : null,
      createdAt: new Date().toISOString(),
      members: 1,
      admin: false, // Not the admin when joining
      theme: groupType === 'public' ? 'green' : 'indigo' // Different themes for joined groups
    };

    const updatedGroups = [...createdGroups, joinedGroup];
    setCreatedGroups(updatedGroups);
    localStorage.setItem('groupify_groups', JSON.stringify(updatedGroups));

    setGroupType(null);
    setJoinGroupId('');
    setJoinGroupPassword('');
    setActionType(null);
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

  const getThemeClasses = () => {
    const base = {
      dark: 'bg-gray-900 text-gray-100',
      light: 'bg-gray-100 text-gray-900',
      blue: 'bg-blue-900 text-blue-100',
      purple: 'bg-purple-900 text-purple-100',
      green: 'bg-green-900 text-green-100',
      indigo: 'bg-indigo-900 text-indigo-100'
    };
    
    const button = {
      dark: 'bg-gray-700 hover:bg-gray-600',
      light: 'bg-gray-300 hover:bg-gray-400',
      blue: 'bg-blue-700 hover:bg-blue-600',
      purple: 'bg-purple-700 hover:bg-purple-600',
      green: 'bg-green-700 hover:bg-green-600',
      indigo: 'bg-indigo-700 hover:bg-indigo-600'
    };
    
    return { base, button };
  };

  const themes = getThemeClasses();
  const currentTheme = themes.base[theme];

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
        className={`absolute left-0 top-0 h-full w-full max-w-md ${currentTheme} shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className={`flex justify-between items-center p-4 border-b ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <h2 className="text-xl font-bold">Study Group Hub</h2>
            <button
              onClick={() => {
                handleClose();
                handleHome();
              }}
              className={`p-1 rounded-full ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {!actionType ? (
              <div className="space-y-6 text-center">
                <div className="p-6">
                  <img 
                    src="https://illustrations.popsy.co/amber/student-graduation.svg" 
                    alt="Study Group" 
                    className="w-48 mx-auto mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-6">Connect with your study community</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <button
                      onClick={() => setActionType('join')}
                      className={`py-3 px-6 rounded-lg ${themes.button[theme]} flex items-center justify-center space-x-2`}
                    >
                      <span>📚</span>
                      <span>Join a Group</span>
                    </button>
                    
                    <button
                      onClick={() => setActionType('create')}
                      className={`py-3 px-6 rounded-lg ${themes.button[theme]} flex items-center justify-center space-x-2`}
                    >
                      <span>🛠️</span>
                      <span>Create a Group</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : !groupType ? (
              <div className="space-y-6">
                <button 
                  onClick={() => setActionType(null)}
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  ← Back to main menu
                </button>

                <h3 className="text-lg font-semibold mb-4">
                  {actionType === 'create' ? 'Create' : 'Join'} a Group
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      groupType === 'public' ? themes.base.blue : themes.button[theme]
                    }`}
                    onClick={() => setGroupType('public')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center">
                        🌐
                      </div>
                      <div>
                        <h4 className="font-bold">Public Study Group</h4>
                        <p className="text-sm opacity-80">
                          {actionType === 'create' 
                            ? 'Anyone can join, great for open discussions' 
                            : 'Browse and join open study groups'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      groupType === 'private' ? themes.base.purple : themes.button[theme]
                    }`}
                    onClick={() => {
                      setGroupType('private');
                      if (actionType === 'create') {
                        setGroupPassword(generateRandomPassword());
                      }
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center">
                        🔒
                      </div>
                      <div>
                        <h4 className="font-bold">Private Study Group</h4>
                        <p className="text-sm opacity-80">
                          {actionType === 'create' 
                            ? 'Invite-only with password protection' 
                            : 'Join with an invite link or password'}
                        </p>
                      </div>
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

                <h3 className="text-lg font-semibold">
                  {actionType === 'create' ? 'Create' : 'Join'} {groupType === 'public' ? 'Public' : 'Private'} Group
                </h3>

                {actionType === 'create' ? (
                  <div className="space-y-4">
                    {groupType === 'private' && (
                      <div>
                        <label className="block mb-2 font-medium">Group Name</label>
                        <input
                          type="text"
                          value={groupName}
                          onChange={(e) => setGroupName(e.target.value)}
                          className={`w-full ${themes.button[theme]} rounded px-3 py-2`}
                          placeholder="e.g., Advanced Calculus Study"
                        />
                      </div>
                    )}

                    {groupType === 'private' && (
                      <div>
                        <label className="block mb-2 font-medium">Group Password</label>
                        <div className="flex items-center">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={groupPassword}
                            readOnly
                            className={`flex-1 ${themes.button[theme]} rounded-l px-3 py-2`}
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className={`${themes.button[theme]} px-3 py-2 border-l ${
                              theme === 'dark' ? 'border-gray-600' : 'border-gray-400'
                            }`}
                          >
                            {showPassword ? '🙈' : '👁️'}
                          </button>
                          <button
                            onClick={() => setGroupPassword(generateRandomPassword())}
                            className={`${themes.button[theme]} px-3 py-2 rounded-r`}
                          >
                            🔄
                          </button>
                        </div>
                        <p className="text-sm mt-1 opacity-80">
                          Share this password with your study group members
                        </p>
                      </div>
                    )}

                    <button
                      onClick={handleCreateGroup}
                      className={`w-full py-3 rounded-lg font-medium ${
                        groupType === 'private' && (!groupName || !groupPassword)
                          ? 'opacity-50 cursor-not-allowed'
                          : themes.button[groupType === 'public' ? 'blue' : 'purple']
                      } transition-all flex items-center justify-center space-x-2`}
                      disabled={groupType === 'private' && (!groupName || !groupPassword)}
                    >
                      <span>🚀</span>
                      <span>Create {groupType === 'public' ? 'Public' : 'Private'} Group</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {groupType === 'private' && (
                      <div>
                        <label className="block mb-2 font-medium">Group ID</label>
                        <input
                          type="text"
                          value={joinGroupId}
                          onChange={(e) => setJoinGroupId(e.target.value)}
                          className={`w-full ${themes.button[theme]} rounded px-3 py-2`}
                          placeholder="Enter group ID provided by admin"
                        />
                      </div>
                    )}

                    {groupType === 'private' && (
                      <div>
                        <label className="block mb-2 font-medium">Group Password</label>
                        <div className="flex items-center">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={joinGroupPassword}
                            onChange={(e) => setJoinGroupPassword(e.target.value)}
                            className={`flex-1 ${themes.button[theme]} rounded px-3 py-2`}
                            placeholder="Enter password provided by admin"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className={`${themes.button[theme]} px-3 py-2 rounded-r ml-1`}
                          >
                            {showPassword ? '🙈' : '👁️'}
                          </button>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleJoinGroup}
                      className={`w-full py-3 rounded-lg font-medium ${
                        groupType === 'private' && !joinGroupPassword
                          ? 'opacity-50 cursor-not-allowed'
                          : themes.button[groupType === 'public' ? 'green' : 'indigo']
                      } transition-all flex items-center justify-center space-x-2`}
                      disabled={groupType === 'private' && !joinGroupPassword}
                    >
                      <span>🎓</span>
                      <span>Join {groupType === 'public' ? 'Public' : 'Private'} Group</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {createdGroups.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Your Study Groups</h3>
                <div className="space-y-3">
                  {createdGroups.map(group => (
                    <div 
                      key={group.id} 
                      className={`rounded-lg p-3 cursor-pointer transition-all ${
                        group.admin ? themes.base[group.theme] : themes.button[theme]
                      }`}
                      onClick={() => handleOpenGroup(group)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold">{group.name}</h4>
                          <p className="text-sm opacity-80">
                            {group.type === 'public' ? 'Public' : 'Private'} • {group.members} member(s)
                            {group.admin && ' • 👑 Admin'}
                          </p>
                        </div>
                        <span className="text-lg">
                          {group.type === 'public' ? '🌐' : '🔒'}
                        </span>
                      </div>
                      {group.type === 'private' && group.admin && (
                        <div className="mt-2 text-xs bg-black bg-opacity-20 p-2 rounded">
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