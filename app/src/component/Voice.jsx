import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VoiceCallUI = ({ onEndCall }) => {
  const [showKeypad, setShowKeypad] = useState(false);
  const navigate = useNavigate();

  const handleEndCall = () => {
    if (onEndCall) onEndCall();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-between py-12 z-50">
      {/* Caller info */}
      <div className="flex flex-col items-center mt-8">
        <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg">
          JD
        </div>
        <h2 className="text-white text-2xl font-semibold">John Doe</h2>
        <p className="text-gray-400 mt-2">Calling...</p>
        <div className="text-white text-2xl font-mono mt-6">00:23</div>
      </div>

      {/* Keypad */}
      {showKeypad && (
        <div className="absolute bottom-48 bg-gray-800 bg-opacity-90 p-6 rounded-xl grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num) => (
            <button 
              key={num}
              className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl hover:bg-gray-600 transition-all"
            >
              {num}
            </button>
          ))}
        </div>
      )}

      {/* Controls */}
      <div className="flex space-x-8 mb-12">
        <button className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl hover:bg-gray-600 transition-all">
          🎤
        </button>

        <button className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl hover:bg-green-700 transition-all">
          🔊
        </button>

        <button
          onClick={() => setShowKeypad(!showKeypad)}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl transition-all ${
            showKeypad ? 'bg-amber-500 hover:bg-amber-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          ⌨
        </button>
      </div>

      {/* End Call */}
      <button 
        onClick={handleEndCall}
        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl hover:bg-red-700 transition-all"
      >
        ✕
      </button>
    </div>
  );
};

export default VoiceCallUI;
