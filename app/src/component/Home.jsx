import { useState, useEffect } from 'react';
import { noticeBoardService } from './noticeBoardService';

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCard, setNewCard] = useState({
    title: '',
    type: 'event',
    image: null,
    uploader: 'User' // You can replace with actual user name
  });

  useEffect(() => {
    const loadedCards = noticeBoardService.getCards();
    setCards(loadedCards);
  }, []);

  const handleAddCard = () => {
    if (!newCard.title || !newCard.image) return;
    
    const updatedCards = [...cards, {
      ...newCard,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    }];
    
    noticeBoardService.saveCards(updatedCards);
    setCards(updatedCards);
    setNewCard({
      title: '',
      type: 'event',
      image: null,
      uploader: 'User'
    });
    setShowAddModal(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewCard(prev => ({
          ...prev,
          image: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Notice Board</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              {card.image && (
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  card.type === 'event' ? 'bg-blue-100 text-blue-800' :
                  card.type === 'hackathon' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {card.type}
                </span>
              </div>
              <p className="text-gray-600 mt-2">Uploaded by: {card.uploader}</p>
              <p className="text-gray-500 text-sm mt-1">{card.date}</p>
            </div>
          </div>
        ))}

        {/* Add Card Button */}
        <div 
          className="bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setShowAddModal(true)}
        >
          <div className="text-center p-8">
            <div className="text-4xl mb-2">+</div>
            <p className="text-gray-600">Add New Notice</p>
          </div>
        </div>
      </div>

      {/* Add Card Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Notice</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={newCard.title}
                onChange={(e) => setNewCard(prev => ({ ...prev, title: e.target.value }))}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter notice title"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Type</label>
              <select
                value={newCard.type}
                onChange={(e) => setNewCard(prev => ({ ...prev, type: e.target.value }))}
                className="w-full border rounded px-3 py-2"
              >
                <option value="event">Event</option>
                <option value="hackathon">Hackathon</option>
                <option value="competition">Competition</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full"
              />
              {newCard.image && (
                <div className="mt-2 h-32 overflow-hidden rounded">
                  <img 
                    src={newCard.image} 
                    alt="Preview" 
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border rounded text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCard}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={!newCard.title || !newCard.image}
              >
                Add Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;