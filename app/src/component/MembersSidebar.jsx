import React from 'react';

const MembersSidebar = ({ members, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-gray-800 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Group Members</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          ✕
        </button>
      </div>
      <div className="overflow-y-auto h-full">
        {members.map(member => (
          <div key={member.id} className="flex items-center p-3 hover:bg-gray-700">
            <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3">
              {member.avatar}
            </div>
            <span className="text-white">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersSidebar;