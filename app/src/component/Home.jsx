import { useState, useEffect } from 'react';

const HomePage = () => {
  const [notices, setNotices] = useState([]);
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const [newNotice, setNewNotice] = useState({
    title: '',
    description: '',
    eventType: 'college',
    priority: 'normal',
    photo: null,
    photoPreview: ''
  });

  useEffect(() => {
    // Load notices from localStorage
    const savedNotices = localStorage.getItem('educationNotices');
    if (savedNotices) {
      setNotices(JSON.parse(savedNotices));
    }
  }, []);

  const saveNoticesToLocal = (updatedNotices) => {
    localStorage.setItem('educationNotices', JSON.stringify(updatedNotices));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotice({
      ...newNotice,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewNotice({
          ...newNotice,
          photo: file,
          photoPreview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitNotice = (e) => {
    e.preventDefault();
    const noticeWithId = {
      ...newNotice,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };
    
    const updatedNotices = [noticeWithId, ...notices];
    setNotices(updatedNotices);
    saveNoticesToLocal(updatedNotices);
    
    // Reset form
    setNewNotice({
      title: '',
      description: '',
      eventType: 'college',
      priority: 'normal',
      photo: null,
      photoPreview: ''
    });
    setShowNoticeForm(false);
  };

  const deleteNotice = (id) => {
    const updatedNotices = notices.filter(notice => notice.id !== id);
    setNotices(updatedNotices);
    saveNoticesToLocal(updatedNotices);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-600';
      case 'hot': return 'bg-orange-500';
      case 'important': return 'bg-yellow-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Quotes Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-purple-400">Inspirational Quotes on Education</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Gandhi Ji */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-shadow">
              <blockquote className="text-lg italic mb-4">
                "Live as if you were to die tomorrow. Learn as if you were to live forever."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">G</div>
                <div>
                  <p className="font-semibold">Mahatma Gandhi</p>
                  <p className="text-gray-400 text-sm">Father of the Nation</p>
                </div>
              </div>
            </div>
            
            {/* Nehru Ji */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow">
              <blockquote className="text-lg italic mb-4">
                "The object of education is to prepare the young to educate themselves throughout their lives."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">N</div>
                <div>
                  <p className="font-semibold">Jawaharlal Nehru</p>
                  <p className="text-gray-400 text-sm">First PM of India</p>
                </div>
              </div>
            </div>
            
            {/* Abdul Kalam */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow">
              <blockquote className="text-lg italic mb-4">
                "Education is the most powerful weapon which you can use to change the world."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">A</div>
                <div>
                  <p className="font-semibold">APJ Abdul Kalam</p>
                  <p className="text-gray-400 text-sm">Missile Man of India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Features */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Communication Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Voice Call */}
            <div className="bg-gray-700 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-transform">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice Call</h3>
              <p className="text-gray-300 mb-4">Connect with peers through high-quality voice calls</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
                Start Call
              </button>
            </div>
            
            {/* Video Call */}
            <div className="bg-gray-700 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-transform">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-video text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Call</h3>
              <p className="text-gray-300 mb-4">Face-to-face virtual meetings with screen sharing</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
                Start Video
              </button>
            </div>
            
            {/* Group Chat */}
            <div className="bg-gray-700 p-6 rounded-xl text-center hover:transform hover:scale-105 transition-transform">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-comments text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Group Chat</h3>
              <p className="text-gray-300 mb-4">Collaborate with your team in real-time chat rooms</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors">
                Open Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-purple-400">Notice Board</h2>
            <button 
              onClick={() => setShowNoticeForm(!showNoticeForm)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors flex items-center"
            >
              <i className="fas fa-plus mr-2"></i> Add Notice
            </button>
          </div>

          {/* Notice Form */}
          {showNoticeForm && (
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Create New Notice</h3>
              <form onSubmit={handleSubmitNotice}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Event Title</label>
                    <input
                      type="text"
                      name="title"
                      value={newNotice.title}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Event Type</label>
                    <select
                      name="eventType"
                      value={newNotice.eventType}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="college">College Event</option>
                      <option value="hackathon">Hackathon</option>
                      <option value="competition">Competition</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">Description</label>
                    <textarea
                      name="description"
                      value={newNotice.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Priority</label>
                    <select
                      name="priority"
                      value={newNotice.priority}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="normal">Normal</option>
                      <option value="important">Important</option>
                      <option value="hot">Hot</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Event Photo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full text-gray-300"
                    />
                    {newNotice.photoPreview && (
                      <div className="mt-2">
                        <img src={newNotice.photoPreview} alt="Preview" className="h-20 rounded-lg" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end mt-6 space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowNoticeForm(false)}
                    className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-full transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
                  >
                    Post Notice
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Notices List */}
          <div className="space-y-6">
            {notices.length === 0 ? (
              <div className="text-center py-12 bg-gray-800 rounded-xl">
                <i className="fas fa-bell-slash text-4xl text-gray-500 mb-4"></i>
                <p className="text-gray-400">No notices yet. Add one to get started!</p>
              </div>
            ) : (
              notices.map(notice => (
                <div key={notice.id} className={`bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 ${getPriorityColor(notice.priority)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{notice.title}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-400">{notice.date}</span>
                        <span className="text-sm px-3 py-1 rounded-full bg-gray-700 text-purple-300">
                          {notice.eventType.charAt(0).toUpperCase() + notice.eventType.slice(1)}
                        </span>
                        <span className={`text-sm px-3 py-1 rounded-full ${getPriorityColor(notice.priority)}`}>
                          {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteNotice(notice.id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mt-4 mb-6">{notice.description}</p>
                  
                  {notice.photoPreview && (
                    <div className="mt-4">
                      <img src={notice.photoPreview} alt="Event" className="max-w-full h-auto rounded-lg max-h-60" />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Education Portal</h3>
              <p className="text-gray-400">Empowering students with knowledge and collaboration tools for a brighter future.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-xl">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Education Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;