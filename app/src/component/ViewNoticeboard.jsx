import { useState, useEffect } from 'react';

const HomePage = () => {
  const [notices, setNotices] = useState([]);
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const [newNotice, setNewNotice] = useState({
    title: '',
    description: '',
    eventType: 'college',
    priority: 'normal',
    photo: null,
    photoPreview: ''
  });

  useEffect(() => {
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
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-purple-400">Notice Board</h2>
        <button
          onClick={() => setShowNoticeForm(!showNoticeForm)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors flex items-center"
        >
          <i className="fas fa-plus mr-2"></i> Add Notice
        </button>
      </div>

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
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Event Type</label>
                <select
                  name="eventType"
                  value={newNotice.eventType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
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
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Priority</label>
                <select
                  name="priority"
                  value={newNotice.priority}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
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
                  <img src={newNotice.photoPreview} alt="Preview" className="h-20 mt-2 rounded-lg" />
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                type="button"
                onClick={() => setShowNoticeForm(false)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-full"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
              >
                Save Notice
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notices.map(notice => (
          <div
            key={notice.id}
            onClick={() => setSelectedNotice(notice)}
            className={`bg-gray-800 p-4 rounded-lg shadow-md border-l-4 ${getPriorityColor(notice.priority)} text-sm cursor-pointer hover:scale-105 transition-transform`}
          >
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
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNotice(notice.id);
                }}
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

      {/* Modal for full notice view (no internal scrollbar) */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start overflow-y-auto py-10">
          <div className="bg-gray-900 w-full max-w-xl rounded-lg p-6 relative shadow-lg mx-4">
          <button>
            
          </button>

            <button
              onClick={() => setSelectedNotice(null)}
              className="absolute top-3 right-3 text-white hover:text-red-400 text-xl"
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>

            <h2 className="text-2xl font-bold text-purple-400 mb-2">{selectedNotice.title}</h2>

            <div className='pt-2.5 pb-9'>
            {selectedNotice.photoPreview && (
              <img 
                src={selectedNotice.photoPreview}
                alt="Event"
                className="rounded-lg object-cover w-full max-h-[400px]"
              />
            )}
            </div>
            <div className="text-sm text-gray-400 mb-2 flex space-x-2">
              <span>{selectedNotice.date}</span>
              <span className="bg-gray-700 px-2 py-0.5 rounded-full text-purple-300">{selectedNotice.eventType}</span>
              <span className={`px-2 py-0.5 rounded-full ${getPriorityColor(selectedNotice.priority)}`}>
                {selectedNotice.priority}
              </span>
            </div>

            <p className="text-gray-300 mb-4 pt-30 whitespace-pre-wrap">{selectedNotice.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
