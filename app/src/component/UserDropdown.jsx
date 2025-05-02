const UserDropdown = ({ user, onLogout, onClose }) => {
    return (
      <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-50">
        <div className="px-4 py-2 border-b border-gray-600">
          <p className="text-sm font-medium text-white">{user.username}</p>
          <p className="text-xs text-gray-400 truncate">{user.email}</p>
        </div>
        <button
          onClick={() => {
            // Profile action would go here
            onClose();
          }}
          className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
        >
          Profile
        </button>
        <button
          onClick={() => {
            // Settings action would go here
            onClose();
          }}
          className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
        >
          Settings
        </button>
        <button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
        >
          Logout
        </button>
      </div>
    );
  };
  
  export default UserDropdown;