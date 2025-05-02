import { useState } from 'react';
import AuthModal from './AuthModal';
import UserDropdown from './UserDropdown';

const Navbar = () => {

    const handlechat = () => {
        window.location.href = '/group';
      };

      

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('groupify_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('groupify_user');
    setUser(null);
    setShowDropdown(false);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-green-400">
          <div className="bg-blue-500 text-white text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center  mr-2">
            G
          </div>
          <span className="text-xl font-bold">Groupify</span>
        </div>

        {/* Middle Options */}
        <div className="hidden md:flex space-x-8">
          <button onClick={handlechat} className="text-white  text-xl hover:text-blue-400 transition-colors">Chat</button>
          <button className="hover:text-blue-400 text-white  text-xl transition-colors">Board</button>
        </div>

        {/* Login/User Avatar */}
        <div className="relative">
          {user ? (
            <div>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-blue-700 transition-colors"
              >
                {user.username.charAt(0).toUpperCase()}
              </button>
              {showDropdown && (
                <UserDropdown 
                  user={user} 
                  onLogout={handleLogout} 
                  onClose={() => setShowDropdown(false)}
                />
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                setAuthMode('login');
                setIsAuthModalOpen(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal
          mode={authMode}
          onClose={() => setIsAuthModalOpen(false)}
          onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
          onSuccess={handleLoginSuccess}
        />
      )}
    </nav>
  );
};

export default Navbar;