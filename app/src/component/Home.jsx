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
            <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-purple-500/30 transition-shadow text-sm min-h-[220px]">
              <blockquote className="italic mb-3">
                "Live as if you were to die tomorrow. Learn as if you were to live forever."
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">G</div>
                <div>
                  <p className="font-medium text-base">Mahatma Gandhi</p>
                  <p className="text-gray-400 text-xs">Father of the Nation</p>
                </div>
              </div>
            </div>
            
            {/* Nehru Ji */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-blue-500/30 transition-shadow text-sm min-h-[220px]">
              <blockquote className="italic mb-3">
                "The object of education is to prepare the young to educate themselves throughout their lives."
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">N</div>
                <div>
                  <p className="font-medium text-base">Jawaharlal Nehru</p>
                  <p className="text-gray-400 text-xs">First PM of India</p>
                </div>
              </div>
            </div>
            
            {/* Abdul Kalam */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/30 transition-shadow text-sm min-h-[220px]">
              <blockquote className="italic mb-3">
                "Education is the most powerful weapon which you can use to change the world."
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">A</div>
                <div>
                  <p className="font-medium text-base">APJ Abdul Kalam</p>
                  <p className="text-gray-400 text-xs">Missile Man of India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Tools */}
      <section className="py-12 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Communication Tools we offers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Voice Call */}
            <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-phone-alt text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-1">Voice Call</h3>
              <p className="text-gray-300 text-sm mb-3">High-quality voice calls for instant connection</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-full text-sm">
                Start Call
              </button>
            </div>
            
            {/* Video Call */}
            <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-video text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-1">Video Call</h3>
              <p className="text-gray-300 text-sm mb-3">Face-to-face virtual meetings with screen sharing</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
                Start Video
              </button>
            </div>




            {/* Video Call */}
            <div className="bg-gray-700 p-3 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[200px] shadow-md">
              <div className="bg-red-400 w-14 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-video text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-1">Noticeboard</h3>
              <p className="text-gray-300 text-sm mb-3">Notice board for sharing valuable events and opportunities</p>
              <button className="bg-red-400 hover:bg-gray-900 text-white px-4 py-1 rounded-full text-sm">
                Start Video
              </button>
            </div>
            
            {/* Group Chat */}
            <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-comments text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold mb-1">Group Chat</h3>
              <p className="text-gray-300 text-sm mb-3">Collaborate with your team in real-time chat rooms</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full text-sm">
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
                    Save Notice
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Notices List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notices.map(notice => (
              <div key={notice.id} className={`bg-gray-800 p-4 rounded-lg shadow-md border-l-4 ${getPriorityColor(notice.priority)} text-sm`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold line-clamp-1">{notice.title}</h3>
                    <div className="flex items-center space-x-2 mt-1 text-xs text-gray-400">
                      <span>{notice.date}</span>
                      <span className="bg-gray-700 px-2 py-0.5 rounded-full text-purple-300">{notice.eventType}</span>
                      <span className={`px-2 py-0.5 rounded-full ${getPriorityColor(notice.priority)}`}>
                        {notice.priority}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteNotice(notice.id)}
                    className="text-gray-400 hover:text-red-400"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
                <p className="text-gray-300 mt-2 mb-4 line-clamp-3">{notice.description}</p>
                {notice.photoPreview && (
                  <img src={notice.photoPreview} alt="Event" className="rounded-lg max-h-40 object-cover w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
<footer className="bg-gray-700 text-gray-200 mt-9 py-6">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
    
    {/* Branding */}
    <div>
      <h3 className="text-xl font-bold text-purple-300 mb-3">EduConnect</h3>
      <p className="text-sm text-gray-300">
        Empowering students and institutions through seamless communication and updates.
      </p>
    </div>

    {/* Features */}
    <div>
      <h4 className="text-lg font-semibold text-purple-200 mb-3">Features We Offer</h4>
      <ul className="space-y-2 text-sm">
        <li>📌 Notice Board</li>
        <li>📞 Voice Call</li>
        <li>🎥 Video Call</li>
        <li>💬 Group Chat</li>
        <li>👥 Group Call</li>
      </ul>
    </div>

    {/* Links */}
    <div>
      <h4 className="text-lg font-semibold text-purple-200 mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-purple-300 transition-colors">Terms of Use</a></li>
        <li><a href="#" className="hover:text-purple-300 transition-colors">Contact Us</a></li>
      </ul>
    </div>

  </div>

  <div className="text-center text-sm text-gray-400 mt-8">
    © {new Date().getFullYear()} EduConnect. All rights reserved.
  </div>
</footer>

    </div>
  );
};

export default HomePage;
