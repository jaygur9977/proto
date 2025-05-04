import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCallUI = ({ onEndCall }) => {
  const navigate = useNavigate();

  const handleEndCall = () => {
    if (onEndCall) onEndCall();  // Call the prop function safely
    navigate('/');               // Navigate to home page
  };

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col z-50">
      {/* Remote Video */}
      <div className="flex-1 bg-gray-800 relative flex items-center justify-center">
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <div className="text-white text-2xl">Remote Video</div>
        </div>

        {/* Local video preview */}
        <div className="absolute bottom-4 right-4 w-32 h-48 bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center shadow-xl">
          <div className="text-white text-sm">Your Video</div>
        </div>

        {/* Caller info */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full flex items-center">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-2">JD</div>
          <span>John Doe</span>
        </div>

        {/* Call timer */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
          05:23
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800 bg-opacity-90 py-6 flex justify-center items-center">
        <div className="flex space-x-6">
          {/* Mute */}
          <button className="w-14 h-14 bg-gray-700 rounded-full text-white text-xl hover:bg-gray-600 transition-all">
            🎤
          </button>

          {/* Video */}
          <button className="w-14 h-14 bg-gray-700 rounded-full text-white text-xl hover:bg-gray-600 transition-all">
            📷
          </button>

          {/* Speaker */}
          <button className="w-14 h-14 bg-green-600 rounded-full text-white text-xl hover:bg-green-700 transition-all">
            🔊
          </button>

          {/* End Call */}
          <button
            onClick={handleEndCall}
            className="w-14 h-14 bg-red-600 rounded-full text-white text-xl hover:bg-red-700 transition-all"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCallUI;
