// // // import { useState, useEffect } from 'react';

// // // const HomePage = () => {
// // //   const [notices, setNotices] = useState([]);
// // //   const [showNoticeForm, setShowNoticeForm] = useState(false);
// // //   const [newNotice, setNewNotice] = useState({
// // //     title: '',
// // //     description: '',
// // //     eventType: 'college',
// // //     priority: 'normal',
// // //     photo: null,
// // //     photoPreview: ''
// // //   });

// // //   useEffect(() => {
// // //     // Load notices from localStorage
// // //     const savedNotices = localStorage.getItem('educationNotices');
// // //     if (savedNotices) {
// // //       setNotices(JSON.parse(savedNotices));
// // //     }
// // //   }, []);

// // //   const saveNoticesToLocal = (updatedNotices) => {
// // //     localStorage.setItem('educationNotices', JSON.stringify(updatedNotices));
// // //   };

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setNewNotice({
// // //       ...newNotice,
// // //       [name]: value
// // //     });
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         setNewNotice({
// // //           ...newNotice,
// // //           photo: file,
// // //           photoPreview: reader.result
// // //         });
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   const handleSubmitNotice = (e) => {
// // //     e.preventDefault();
// // //     const noticeWithId = {
// // //       ...newNotice,
// // //       id: Date.now(),
// // //       date: new Date().toLocaleDateString()
// // //     };

// // //     const updatedNotices = [noticeWithId, ...notices];
// // //     setNotices(updatedNotices);
// // //     saveNoticesToLocal(updatedNotices);

// // //     // Reset form
// // //     setNewNotice({
// // //       title: '',
// // //       description: '',
// // //       eventType: 'college',
// // //       priority: 'normal',
// // //       photo: null,
// // //       photoPreview: ''
// // //     });
// // //     setShowNoticeForm(false);
// // //   };

// // //   const deleteNotice = (id) => {
// // //     const updatedNotices = notices.filter(notice => notice.id !== id);
// // //     setNotices(updatedNotices);
// // //     saveNoticesToLocal(updatedNotices);
// // //   };

// // //   const getPriorityColor = (priority) => {
// // //     switch (priority) {
// // //       case 'urgent': return 'bg-red-600';
// // //       case 'hot': return 'bg-orange-500';
// // //       case 'important': return 'bg-yellow-500';
// // //       default: return 'bg-blue-500';
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-900 text-gray-100">
// // //       {/* Quotes Section */}
// // //       <section className="py-12 px-4">
// // //         <div className="max-w-6xl mx-auto">
// // //           <h1 className="text-4xl font-bold text-center mb-12 text-purple-400">Inspirational Quotes on Education</h1>
// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {/* Gandhi Ji */}
// // //             <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-purple-500/30 transition-shadow text-sm min-h-[220px]">
// // //               <blockquote className="italic mb-3">
// // //                 "Live as if you were to die tomorrow. Learn as if you were to live forever."
// // //               </blockquote>
// // //               <div className="flex items-center mt-auto">
// // //                 <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">G</div>
// // //                 <div>
// // //                   <p className="font-medium text-base">Mahatma Gandhi</p>
// // //                   <p className="text-gray-400 text-xs">Father of the Nation</p>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             {/* Nehru Ji */}
// // //             <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-blue-500/30 transition-shadow text-sm min-h-[220px]">
// // //               <blockquote className="italic mb-3">
// // //                 "The object of education is to prepare the young to educate themselves throughout their lives."
// // //               </blockquote>
// // //               <div className="flex items-center mt-auto">
// // //                 <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">N</div>
// // //                 <div>
// // //                   <p className="font-medium text-base">Jawaharlal Nehru</p>
// // //                   <p className="text-gray-400 text-xs">First PM of India</p>
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             {/* Abdul Kalam */}
// // //             <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/30 transition-shadow text-sm min-h-[220px]">
// // //               <blockquote className="italic mb-3">
// // //                 "Education is the most powerful weapon which you can use to change the world."
// // //               </blockquote>
// // //               <div className="flex items-center mt-auto">
// // //                 <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">A</div>
// // //                 <div>
// // //                   <p className="font-medium text-base">APJ Abdul Kalam</p>
// // //                   <p className="text-gray-400 text-xs">Missile Man of India</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Communication Tools */}
// // //       <section className="py-12 px-4 bg-gray-800">
// // //         <div className="max-w-6xl mx-auto">
// // //           <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Communication Tools we offers</h2>
// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {/* Voice Call */}
// // //             <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
// // //               <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
// // //                 <i className="fas fa-phone-alt text-lg"></i>
// // //               </div>
// // //               <h3 className="text-lg font-semibold mb-1">Voice Call</h3>
// // //               <p className="text-gray-300 text-sm mb-3">High-quality voice calls for instant connection</p>
// // //               <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-full text-sm">
// // //                 Start Call
// // //               </button>
// // //             </div>
            
// // //             {/* Video Call */}
// // //             <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
// // //               <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
// // //                 <i className="fas fa-video text-lg"></i>
// // //               </div>
// // //               <h3 className="text-lg font-semibold mb-1">Video Call</h3>
// // //               <p className="text-gray-300 text-sm mb-3">Face-to-face virtual meetings with screen sharing</p>
// // //               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
// // //                 Start Video
// // //               </button>
// // //             </div>




// // //             {/* Video Call */}
// // //             <div className="bg-gray-700 p-3 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[200px] shadow-md">
// // //               <div className="bg-red-500 w-14 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
// // //                 <i className="fas fa-video text-lg"></i>
// // //               </div>
// // //               <h3 className="text-lg font-semibold mb-1">Noticeboard</h3>
// // //               <p className="text-gray-300 text-sm mb-3">Notice board for sharing valuable events and opportunities</p>
// // //               <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-1 rounded-full text-sm">
// // //                 check Imp Notice
// // //               </button>
// // //             </div>
            
// // //             {/* Group Chat */}
// // //             <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
// // //               <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
// // //                 <i className="fas fa-comments text-lg"></i>
// // //               </div>
// // //               <h3 className="text-lg font-semibold mb-1">Group Chat</h3>
// // //               <p className="text-gray-300 text-sm mb-3">Collaborate with your team in real-time chat rooms</p>
// // //               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full text-sm">
// // //                 Open Chat
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Notice Board Section */}
// // //       <section className="py-12 px-4">
// // //         <div className="max-w-6xl mx-auto">
// // //           <div className="flex justify-between items-center mb-8">
// // //             <h2 className="text-3xl font-bold text-purple-400">Notice Board</h2>
// // //             <button 
// // //               onClick={() => setShowNoticeForm(!showNoticeForm)}
// // //               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors flex items-center"
// // //             >
// // //               <i className="fas fa-plus mr-2"></i> Add Notice
// // //             </button>
// // //           </div>

// // //           {/* Notice Form */}
// // //           {showNoticeForm && (
// // //             <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
// // //               <h3 className="text-xl font-semibold mb-4 text-purple-300">Create New Notice</h3>
// // //               <form onSubmit={handleSubmitNotice}>
// // //                 <div className="grid md:grid-cols-2 gap-6">
// // //                   <div>
// // //                     <label className="block text-gray-300 mb-2">Event Title</label>
// // //                     <input
// // //                       type="text"
// // //                       name="title"
// // //                       value={newNotice.title}
// // //                       onChange={handleInputChange}
// // //                       className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-300 mb-2">Event Type</label>
// // //                     <select
// // //                       name="eventType"
// // //                       value={newNotice.eventType}
// // //                       onChange={handleInputChange}
// // //                       className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// // //                     >
// // //                       <option value="college">College Event</option>
// // //                       <option value="hackathon">Hackathon</option>
// // //                       <option value="competition">Competition</option>
// // //                       <option value="other">Other</option>
// // //                     </select>
// // //                   </div>

// // //                   <div className="md:col-span-2">
// // //                     <label className="block text-gray-300 mb-2">Description</label>
// // //                     <textarea
// // //                       name="description"
// // //                       value={newNotice.description}
// // //                       onChange={handleInputChange}
// // //                       rows="4"
// // //                       className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// // //                       required
// // //                     ></textarea>
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-300 mb-2">Priority</label>
// // //                     <select
// // //                       name="priority"
// // //                       value={newNotice.priority}
// // //                       onChange={handleInputChange}
// // //                       className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// // //                     >
// // //                       <option value="normal">Normal</option>
// // //                       <option value="important">Important</option>
// // //                       <option value="hot">Hot</option>
// // //                       <option value="urgent">Urgent</option>
// // //                     </select>
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-300 mb-2">Event Photo</label>
// // //                     <input
// // //                       type="file"
// // //                       accept="image/*"
// // //                       onChange={handleFileChange}
// // //                       className="w-full text-gray-300"
// // //                     />
// // //                     {newNotice.photoPreview && (
// // //                       <div className="mt-2">
// // //                         <img src={newNotice.photoPreview} alt="Preview" className="h-20 rounded-lg" />
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex justify-end mt-6 space-x-4">
// // //                   <button
// // //                     type="button"
// // //                     onClick={() => setShowNoticeForm(false)}
// // //                     className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-full transition-colors"
// // //                   >
// // //                     Cancel
// // //                   </button>
// // //                   <button
// // //                     type="submit"
// // //                     className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
// // //                   >
// // //                     Save Notice
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           )}

// // //           {/* Notices List */}
// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900">
// // //             {notices.map(notice => (
// // //               <div key={notice.id} className={`bg-gray-800 p-4 rounded-lg shadow-md border-l-4 ${getPriorityColor(notice.priority)}`}>
// // //                 <div className="flex justify-between items-start mb-2">
// // //                   <div>
// // //                     <h3 className="text-lg font-semibold line-clamp-1">{notice.title}</h3>
// // //                     <div className="flex items-center space-x-2 mt-1 text-xs text-gray-400">
// // //                       <span>{notice.date}</span>
// // //                       <span className="bg-gray-700 px-2 py-0.5 rounded-full text-purple-300">{notice.eventType}</span>
// // //                       <span className={`px-2 py-0.5 rounded-full ${getPriorityColor(notice.priority)}`}>
// // //                         {notice.priority}
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                   <button
// // //                     onClick={() => deleteNotice(notice.id)}
// // //                     className="text-gray-400 hover:text-red-400"
// // //                   >
// // //                     <i className="fas fa-trash"></i>
// // //                   </button>
// // //                 </div>
// // //                 {notice.photoPreview && (
// // //                   <img src={notice.photoPreview} alt="Event" className="rounded-lg max-h-40 object-cover w-full" />
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Footer Section */}
// // // <footer className="bg-gray-700 text-gray-200 mt-9 py-6">
// // //   <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
    
// // //     {/* Branding */}
// // //     <div>
// // //       <h3 className="text-xl font-bold text-purple-300 mb-3">EduConnect</h3>
// // //       <p className="text-sm text-gray-300">
// // //         Empowering students and institutions through seamless communication and updates.
// // //       </p>
// // //     </div>

// // //     {/* Features */}
// // //     <div>
// // //       <h4 className="text-lg font-semibold text-purple-200 mb-3">Features We Offer</h4>
// // //       <ul className="space-y-2 text-sm">
// // //         <li>📌 Notice Board</li>
// // //         <li>📞 Voice Call</li>
// // //         <li>🎥 Video Call</li>
// // //         <li>💬 Group Chat</li>
// // //         <li>👥 Group Call</li>
// // //       </ul>
// // //     </div>

// // //     {/* Links */}
// // //     <div>
// // //       <h4 className="text-lg font-semibold text-purple-200 mb-3">Quick Links</h4>
// // //       <ul className="space-y-2 text-sm">
// // //         <li><a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a></li>
// // //         <li><a href="#" className="hover:text-purple-300 transition-colors">Terms of Use</a></li>
// // //         <li><a href="#" className="hover:text-purple-300 transition-colors">Contact Us</a></li>
// // //       </ul>
// // //     </div>

// // //   </div>

// // //   <div className="text-center text-sm text-gray-400 mt-8">
// // //     © {new Date().getFullYear()} EduConnect. All rights reserved.
// // //   </div>
// // // </footer>

// // //     </div>
// // //   );
// // // };

// // // export default HomePage;




// // import { useState, useEffect } from 'react';
// // import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // const HomePage = () => {
// //   // Game state
// //   const [gameUnlocked, setGameUnlocked] = useState(false);
// //   const [answeredQuestions, setAnsweredQuestions] = useState(0);
// //   const [correctAnswers, setCorrectAnswers] = useState(0);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [showGameSection, setShowGameSection] = useState(false);
  
// //   // DSA Questions
// //   const [dsaQuestions] = useState([
// //     {
// //       question: "Which data structure uses LIFO principle?",
// //       options: ["Queue", "Stack", "Array", "Tree"],
// //       answer: "Stack"
// //     },
// //     {
// //       question: "What is the time complexity of binary search?",
// //       options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
// //       answer: "O(log n)"
// //     },
// //     {
// //       question: "Which algorithm uses divide and conquer approach?",
// //       options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
// //       answer: "Merge Sort"
// //     },
// //     {
// //       question: "What is the space complexity of quick sort?",
// //       options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
// //       answer: "O(log n)"
// //     },
// //     {
// //       question: "Which data structure is used for BFS?",
// //       options: ["Stack", "Queue", "Heap", "Hash Table"],
// //       answer: "Queue"
// //     },
// //     {
// //       question: "What is the worst case time complexity of quicksort?",
// //       options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
// //       answer: "O(n^2)"
// //     },
// //     {
// //       question: "Which data structure has O(1) average time for search?",
// //       options: ["Binary Search Tree", "Hash Table", "Linked List", "Stack"],
// //       answer: "Hash Table"
// //     },
// //     {
// //       question: "What is the height of a complete binary tree with n nodes?",
// //       options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
// //       answer: "O(log n)"
// //     }
// //   ]);

// //   // Weekly credits data
// //   const [weeklyCredits, setWeeklyCredits] = useState([
// //     { day: 'Mon', tasks: 3, credits: 45 },
// //     { day: 'Tue', tasks: 5, credits: 72 },
// //     { day: 'Wed', tasks: 4, credits: 58 },
// //     { day: 'Thu', tasks: 6, credits: 85 },
// //     { day: 'Fri', tasks: 2, credits: 30 },
// //     { day: 'Sat', tasks: 7, credits: 92 },
// //     { day: 'Sun', tasks: 4, credits: 63 },
// //   ]);

// //   // Game leaderboard
// //   const [gameLeaderboard, setGameLeaderboard] = useState([
// //     { id: 1, name: 'CodeMaster', score: 1250, avatar: 'CM' },
// //     { id: 2, name: 'AlgoKing', score: 1120, avatar: 'AK' },
// //     { id: 3, name: 'DataStruct', score: 980, avatar: 'DS' },
// //     { id: 4, name: 'BinaryTree', score: 875, avatar: 'BT' },
// //     { id: 5, name: 'HashTable', score: 820, avatar: 'HT' },
// //   ]);

// //   // Daily performance pie chart data
// //   const [dailyData, setDailyData] = useState([
// //     { name: 'Lectures', value: 35, color: '#0088FE' },
// //     { name: 'Practice', value: 25, color: '#00C49F' },
// //     { name: 'Projects', value: 20, color: '#FFBB28' },
// //     { name: 'Quizzes', value: 15, color: '#FF8042' },
// //     { name: 'Break', value: 5, color: '#8884D8' },
// //   ]);

// //   // COLORS
// //   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  
// //   // Custom shape for pie chart
// //   const RADIAN = Math.PI / 180;
// //   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
// //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
// //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
// //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

// //     return (
// //       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
// //         {`${(percent * 100).toFixed(0)}%`}
// //       </text>
// //     );
// //   };

// //   // Handle answer submission
// //   const handleAnswer = (selectedAnswer) => {
// //     const isCorrect = selectedAnswer === dsaQuestions[currentQuestion].answer;
// //     setAnsweredQuestions(answeredQuestions + 1);
    
// //     if (isCorrect) {
// //       setCorrectAnswers(correctAnswers + 1);
// //     }

// //     // Move to next question or unlock game
// //     if (currentQuestion < dsaQuestions.length - 1) {
// //       setCurrentQuestion(currentQuestion + 1);
// //     }

// //     // Unlock game if 4 correct answers
// //     if (correctAnswers >= 3 || (isCorrect && correctAnswers === 3)) {
// //       setGameUnlocked(true);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-gray-100">
// //       {/* Main Content */}
// //       <main className="container mx-auto py-8 px-4">
// //         {/* Stats Overview */}
// //         <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //           {/* Weekly Credits */}
// //           <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
// //             <div className="flex justify-between items-start">
// //               <div>
// //                 <h3 className="text-gray-300 text-sm font-medium">Weekly Credits</h3>
// //                 <p className="text-3xl font-bold mt-2">445</p>
// //               </div>
// //               <div className="bg-white/10 rounded-full p-2">
// //                 <i className="fas fa-coins text-yellow-400"></i>
// //               </div>
// //             </div>
// //             <div className="mt-4 flex items-center text-sm">
// //               <span className="text-green-400 mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
// //               <span className="text-gray-300">from last week</span>
// //             </div>
// //           </div>

// //           {/* Daily Goal */}
// //           <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
// //             <div className="flex justify-between items-start">
// //               <div>
// //                 <h3 className="text-gray-300 text-sm font-medium">Daily Goal</h3>
// //                 <p className="text-3xl font-bold mt-2">3/5</p>
// //               </div>
// //               <div className="bg-white/10 rounded-full p-2">
// //                 <i className="fas fa-bullseye text-purple-400"></i>
// //               </div>
// //             </div>
// //             <div className="mt-4">
// //               <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
// //                 <div 
// //                   className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" 
// //                   style={{ width: '60%' }}
// //                 ></div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Current Streak */}
// //           <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
// //             <div className="flex justify-between items-start">
// //               <div>
// //                 <h3 className="text-gray-300 text-sm font-medium">Current Streak</h3>
// //                 <p className="text-3xl font-bold mt-2">7<span className="text-xl text-gray-300">days</span></p>
// //               </div>
// //               <div className="bg-white/10 rounded-full p-2">
// //                 <i className="fas fa-fire text-orange-400"></i>
// //               </div>
// //             </div>
// //             <div className="mt-4 flex items-center text-sm">
// //               <span className="text-green-400 mr-2"><i className="fas fa-arrow-up"></i> 2 days</span>
// //               <span className="text-gray-300">new record</span>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Charts Section */}
// //         <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
// //           {/* Line Chart */}
// //           <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
// //             <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
// //               Weekly Credits Achieved
// //             </h2>
// //             <div className="h-80">
// //               <ResponsiveContainer width="100%" height="100%">
// //                 <LineChart
// //                   data={weeklyCredits}
// //                   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// //                 >
// //                   <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
// //                   <XAxis dataKey="day" stroke="#9CA3AF" />
// //                   <YAxis stroke="#9CA3AF" />
// //                   <Tooltip 
// //                     contentStyle={{ 
// //                       backgroundColor: '#1F2937', 
// //                       borderColor: '#4B5563', 
// //                       borderRadius: '0.5rem',
// //                       background: 'rgba(31, 41, 55, 0.8)',
// //                       backdropFilter: 'blur(4px)'
// //                     }}
// //                     itemStyle={{ color: '#E5E7EB' }}
// //                   />
// //                   <Legend 
// //                     wrapperStyle={{ paddingTop: '20px' }}
// //                     formatter={(value) => <span className="text-gray-300">{value}</span>}
// //                   />
// //                   <Line 
// //                     type="monotone" 
// //                     dataKey="credits" 
// //                     stroke="#8884d8" 
// //                     strokeWidth={2}
// //                     activeDot={{ r: 8 }} 
// //                   />
// //                   <Line 
// //                     type="monotone" 
// //                     dataKey="tasks" 
// //                     stroke="#82ca9d" 
// //                     strokeWidth={2}
// //                   />
// //                 </LineChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>

// //           {/* Pie Chart */}
// //           <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
// //             <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
// //               Daily Activity Breakdown
// //             </h2>
// //             <div className="h-80">
// //               <ResponsiveContainer width="100%" height="100%">
// //                 <PieChart>
// //                   <Pie
// //                     data={dailyData}
// //                     cx="50%"
// //                     cy="50%"
// //                     labelLine={false}
// //                     label={renderCustomizedLabel}
// //                     outerRadius={80}
// //                     fill="#8884d8"
// //                     dataKey="value"
// //                   >
// //                     {dailyData.map((entry, index) => (
// //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                     ))}
// //                   </Pie>
// //                   <Tooltip 
// //                     contentStyle={{ 
// //                       backgroundColor: '#1F2937', 
// //                       borderColor: '#4B5563', 
// //                       borderRadius: '0.5rem',
// //                       background: 'rgba(31, 41, 55, 0.8)',
// //                       backdropFilter: 'blur(4px)'
// //                     }}
// //                     itemStyle={{ color: '#E5E7EB' }}
// //                   />
// //                   <Legend 
// //                     wrapperStyle={{ paddingTop: '20px' }}
// //                     formatter={(value) => <span className="text-gray-300">{value}</span>}
// //                   />
// //                 </PieChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Game Section */}
// //         <section className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm mb-8">
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
// //               DSA Challenge
// //             </h2>
// //             <button 
// //               onClick={() => setShowGameSection(!showGameSection)}
// //               className="px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
// //             >
// //               {showGameSection ? 'Hide Challenge' : 'Show Challenge'}
// //             </button>
// //           </div>

// //           {showGameSection && (
// //             <div className="mt-6">
// //               {!gameUnlocked ? (
// //                 <div className="bg-gray-800/50 p-6 rounded-xl">
// //                   <h3 className="text-lg font-semibold mb-4">
// //                     Answer 4 DSA questions correctly to unlock multiplayer game ({correctAnswers}/4 correct)
// //                   </h3>
// //                   <div className="bg-gray-700/50 p-4 rounded-lg mb-4">
// //                     <h4 className="font-medium mb-2">{dsaQuestions[currentQuestion].question}</h4>
// //                     <div className="grid grid-cols-2 gap-3 mt-4">
// //                       {dsaQuestions[currentQuestion].options.map((option, i) => (
// //                         <button
// //                           key={i}
// //                           onClick={() => handleAnswer(option)}
// //                           className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors text-left"
// //                         >
// //                           {option}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div className="text-sm text-gray-400">
// //                     Progress: {answeredQuestions} of {dsaQuestions.length} questions attempted
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <div className="bg-gray-800/50 p-6 rounded-xl">
// //                   <div className="flex justify-between items-center mb-6">
// //                     <h3 className="text-lg font-semibold text-green-400">
// //                       🎉 Congratulations! Multiplayer Game Unlocked!
// //                     </h3>
// //                     <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-full transition-colors">
// //                       Play Now
// //                     </button>
// //                   </div>

// //                   <div className="bg-gray-700/30 p-4 rounded-lg">
// //                     <h4 className="font-medium mb-3">Game Leaderboard</h4>
// //                     <div className="space-y-3">
// //                       {gameLeaderboard.map((player, index) => (
// //                         <div key={player.id} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
// //                           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${
// //                             index === 0 ? 'bg-gradient-to-br from-yellow-500 to-yellow-300 text-gray-900' : 
// //                             index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-300 text-gray-900' : 
// //                             index === 2 ? 'bg-gradient-to-br from-amber-700 to-amber-600 text-white' : 
// //                             'bg-gray-600 text-white'
// //                           }`}>
// //                             {index + 1}
// //                           </div>
// //                           <div className="flex-1">
// //                             <div className="font-medium">{player.name}</div>
// //                             <div className="text-xs text-gray-400">Score: {player.score}</div>
// //                           </div>
// //                           <div className="text-sm font-bold text-yellow-400">
// //                             {index === 0 ? '🏆 Gold' : index === 1 ? '🥈 Silver' : index === 2 ? '🥉 Bronze' : ''}
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </section>

// //         {/* Full Width Leaderboard */}
// //         <section className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
// //           <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
// //             Weekly Leaderboard
// //           </h2>
          
// //           <div className="overflow-x-auto">
// //             <table className="w-full">
// //               <thead>
// //                 <tr className="text-left text-gray-400 border-b border-gray-700">
// //                   <th className="pb-3 pl-2">Rank</th>
// //                   <th className="pb-3">Student</th>
// //                   <th className="pb-3">Credits</th>
// //                   <th className="pb-3">Tasks Completed</th>
// //                   <th className="pb-3 pr-2">Progress</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {[
// //                   { id: 1, name: 'Alex Johnson', credits: 445, tasks: 21, avatar: 'AJ' },
// //                   { id: 2, name: 'Priya Patel', credits: 398, tasks: 19, avatar: 'PP' },
// //                   { id: 3, name: 'Rahul Sharma', credits: 375, tasks: 18, avatar: 'RS' },
// //                   { id: 4, name: 'Mia Chen', credits: 352, tasks: 17, avatar: 'MC' },
// //                   { id: 5, name: 'David Kim', credits: 320, tasks: 15, avatar: 'DK' },
// //                 ].map((student, index) => (
// //                   <tr key={student.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
// //                     <td className="py-4 pl-2">
// //                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
// //                         index === 0 ? 'bg-gradient-to-br from-yellow-500 to-yellow-300 text-gray-900' : 
// //                         index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-300 text-gray-900' : 
// //                         index === 2 ? 'bg-gradient-to-br from-amber-700 to-amber-600 text-white' : 
// //                         'bg-gray-700 text-white'
// //                       }`}>
// //                         {index + 1}
// //                       </div>
// //                     </td>
// //                     <td className="py-4">
// //                       <div className="flex items-center">
// //                         <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center font-bold mr-3">
// //                           {student.avatar}
// //                         </div>
// //                         <div className="font-medium">{student.name}</div>
// //                       </div>
// //                     </td>
// //                     <td className="py-4 font-bold">{student.credits}</td>
// //                     <td className="py-4">{student.tasks}</td>
// //                     <td className="py-4 pr-2">
// //                       <div className="w-full bg-gray-700 rounded-full h-2.5">
// //                         <div 
// //                           className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" 
// //                           style={{ width: `${(student.credits / 500) * 100}%` }}
// //                         ></div>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </section>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 py-8 px-4 border-t border-gray-700/50 backdrop-blur-sm mt-8">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
// //             EduGame Platform
// //           </h3>
// //           <p className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
// //             Combining education with gamification to make learning fun and competitive.
// //             Track your progress, compete with friends, and unlock new challenges.
// //           </p>
// //           <div className="flex justify-center space-x-6 mb-6">
// //             <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
// //               <i className="fab fa-twitter"></i>
// //             </a>
// //             <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
// //               <i className="fab fa-instagram"></i>
// //             </a>
// //             <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
// //               <i className="fab fa-youtube"></i>
// //             </a>
// //             <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
// //               <i className="fab fa-linkedin-in"></i>
// //             </a>
// //           </div>
// //           <div className="text-sm text-gray-500">
// //             © {new Date().getFullYear()} EduGame. All rights reserved.
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default HomePage;



// import { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const HomePage = () => {
//   // Game state
//   const [gameUnlocked, setGameUnlocked] = useState(false);
//   const [answeredQuestions, setAnsweredQuestions] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showGameSection, setShowGameSection] = useState(false);
  
//   // DSA Questions
//   const [dsaQuestions] = useState([
//     {
//       question: "Which data structure uses LIFO principle?",
//       options: ["Queue", "Stack", "Array", "Tree"],
//       answer: "Stack"
//     },
//     {
//       question: "What is the time complexity of binary search?",
//       options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
//       answer: "O(log n)"
//     },
//     {
//       question: "Which algorithm uses divide and conquer approach?",
//       options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
//       answer: "Merge Sort"
//     },
//     {
//       question: "What is the space complexity of quick sort?",
//       options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
//       answer: "O(log n)"
//     },
//     {
//       question: "Which data structure is used for BFS?",
//       options: ["Stack", "Queue", "Heap", "Hash Table"],
//       answer: "Queue"
//     },
//     {
//       question: "What is the worst case time complexity of quicksort?",
//       options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
//       answer: "O(n^2)"
//     },
//     {
//       question: "Which data structure has O(1) average time for search?",
//       options: ["Binary Search Tree", "Hash Table", "Linked List", "Stack"],
//       answer: "Hash Table"
//     },
//     {
//       question: "What is the height of a complete binary tree with n nodes?",
//       options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
//       answer: "O(log n)"
//     }
//   ]);

//   // Weekly credits data
//   const [weeklyCredits, setWeeklyCredits] = useState([
//     { day: 'Mon', tasks: 3, credits: 45 },
//     { day: 'Tue', tasks: 5, credits: 72 },
//     { day: 'Wed', tasks: 4, credits: 58 },
//     { day: 'Thu', tasks: 6, credits: 85 },
//     { day: 'Fri', tasks: 2, credits: 30 },
//     { day: 'Sat', tasks: 7, credits: 92 },
//     { day: 'Sun', tasks: 4, credits: 63 },
//   ]);

//   // Game leaderboard
//   const [gameLeaderboard, setGameLeaderboard] = useState([
//     { id: 1, name: 'CodeMaster', score: 1250, avatar: 'CM' },
//     { id: 2, name: 'AlgoKing', score: 1120, avatar: 'AK' },
//     { id: 3, name: 'DataStruct', score: 980, avatar: 'DS' },
//     { id: 4, name: 'BinaryTree', score: 875, avatar: 'BT' },
//     { id: 5, name: 'HashTable', score: 820, avatar: 'HT' },
//   ]);

//   // Daily performance pie chart data
//   const [dailyData, setDailyData] = useState([
//     { name: 'Lectures', value: 35, color: '#4DA8DA' },
//     { name: 'Practice', value: 25, color: '#5CB85C' },
//     { name: 'Projects', value: 20, color: '#F0AD4E' },
//     { name: 'Quizzes', value: 15, color: '#D9534F' },
//     { name: 'Break', value: 5, color: '#5BC0DE' },
//   ]);

//   // COLORS - Updated to sky blue palette
//   const COLORS = ['#4DA8DA', '#5CB85C', '#F0AD4E', '#D9534F', '#5BC0DE'];
  
//   // Custom shape for pie chart
//   const RADIAN = Math.PI / 180;
//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   // Handle answer submission
//   const handleAnswer = (selectedAnswer) => {
//     const isCorrect = selectedAnswer === dsaQuestions[currentQuestion].answer;
//     setAnsweredQuestions(answeredQuestions + 1);
    
//     if (isCorrect) {
//       setCorrectAnswers(correctAnswers + 1);
//     }

//     // Move to next question or unlock game
//     if (currentQuestion < dsaQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }

//     // Unlock game if 4 correct answers
//     if (correctAnswers >= 3 || (isCorrect && correctAnswers === 3)) {
//       setGameUnlocked(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 text-gray-800">
//       {/* Main Content */}
//       <main className="container mx-auto py-8 px-4">
//         {/* Stats Overview */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* Weekly Credits */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl border border-blue-300 shadow-sm">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-gray-600 text-sm font-medium">Weekly Credits</h3>
//                 <p className="text-3xl font-bold mt-2 text-blue-800">445</p>
//               </div>
//               <div className="bg-blue-100 rounded-full p-2 border border-blue-200">
//                 <i className="fas fa-coins text-yellow-500"></i>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center text-sm">
//               <span className="text-green-600 mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
//               <span className="text-gray-600">from last week</span>
//             </div>
//           </div>

//           {/* Daily Goal */}
//           <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-2xl border border-cyan-200 shadow-sm">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-gray-600 text-sm font-medium">Daily Goal</h3>
//                 <p className="text-3xl font-bold mt-2 text-cyan-800">3/5</p>
//               </div>
//               <div className="bg-cyan-100 rounded-full p-2 border border-cyan-200">
//                 <i className="fas fa-bullseye text-cyan-500"></i>
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" 
//                   style={{ width: '60%' }}
//                 ></div>
//               </div>
//             </div>
//           </div>

//           {/* Current Streak */}
//           <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200 shadow-sm">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-gray-600 text-sm font-medium">Current Streak</h3>
//                 <p className="text-3xl font-bold mt-2 text-orange-800">7<span className="text-xl text-orange-600">days</span></p>
//               </div>
//               <div className="bg-orange-100 rounded-full p-2 border border-orange-200">
//                 <i className="fas fa-fire text-orange-500"></i>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center text-sm">
//               <span className="text-green-600 mr-2"><i className="fas fa-arrow-up"></i> 2 days</span>
//               <span className="text-gray-600">new record</span>
//             </div>
//           </div>
//         </section>

//         {/* Charts Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           {/* Line Chart */}
//           <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
//             <h2 className="text-xl font-bold mb-6 text-blue-600">
//               Weekly Credits Achieved
//             </h2>
//             <div className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                   data={weeklyCredits}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//                   <XAxis dataKey="day" stroke="#6B7280" />
//                   <YAxis stroke="#6B7280" />
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: '#FFFFFF', 
//                       borderColor: '#E5E7EB', 
//                       borderRadius: '0.5rem',
//                       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//                       borderWidth: '1px'
//                     }}
//                     itemStyle={{ color: '#1F2937' }}
//                   />
//                   <Legend 
//                     wrapperStyle={{ paddingTop: '20px' }}
//                     formatter={(value) => <span className="text-gray-600">{value}</span>}
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="credits" 
//                     stroke="#4DA8DA" 
//                     strokeWidth={2}
//                     activeDot={{ r: 8 }} 
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="tasks" 
//                     stroke="#5CB85C" 
//                     strokeWidth={2}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Pie Chart */}
//           <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
//             <h2 className="text-xl font-bold mb-6 text-blue-600">
//               Daily Activity Breakdown
//             </h2>
//             <div className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={dailyData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     label={renderCustomizedLabel}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="value"
//                   >
//                     {dailyData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: '#FFFFFF', 
//                       borderColor: '#E5E7EB', 
//                       borderRadius: '0.5rem',
//                       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//                       borderWidth: '1px'
//                     }}
//                     itemStyle={{ color: '#1F2937' }}
//                   />
//                   <Legend 
//                     wrapperStyle={{ paddingTop: '20px' }}
//                     formatter={(value) => <span className="text-gray-600">{value}</span>}
//                   />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </section>

//         {/* Game Section */}
//         <section className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl border border-blue-200 shadow-sm mb-8">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold text-blue-700">
//               DSA Challenge
//             </h2>
//             <button 
//               onClick={() => setShowGameSection(!showGameSection)}
//               className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-sm text-white"
//             >
//               {showGameSection ? 'Hide Challenge' : 'Show Challenge'}
//             </button>
//           </div>

//           {showGameSection && (
//             <div className="mt-6">
//               {!gameUnlocked ? (
//                 <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
//                   <h3 className="text-lg font-semibold mb-4 text-gray-700">
//                     Answer 4 DSA questions correctly to unlock multiplayer game ({correctAnswers}/4 correct)
//                   </h3>
//                   <div className="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-100">
//                     <h4 className="font-medium mb-2 text-gray-700">{dsaQuestions[currentQuestion].question}</h4>
//                     <div className="grid grid-cols-2 gap-3 mt-4">
//                       {dsaQuestions[currentQuestion].options.map((option, i) => (
//                         <button
//                           key={i}
//                           onClick={() => handleAnswer(option)}
//                           className="px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors text-left border border-blue-200 text-gray-700"
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     Progress: {answeredQuestions} of {dsaQuestions.length} questions attempted
//                   </div>
//                 </div>
//               ) : (
//                 <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
//                   <div className="flex justify-between items-center mb-6">
//                     <h3 className="text-lg font-semibold text-green-600">
//                       🎉 Congratulations! Multiplayer Game Unlocked!
//                     </h3>
//                     <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full transition-colors text-white">
//                       Play Now
//                     </button>
//                   </div>

//                   <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//                     <h4 className="font-medium mb-3 text-gray-700">Game Leaderboard</h4>
//                     <div className="space-y-3">
//                       {gameLeaderboard.map((player, index) => (
//                         <div key={player.id} className="flex items-center bg-white p-3 rounded-lg border border-blue-100 shadow-xs">
//                           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${
//                             index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-300 text-gray-900' : 
//                             index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-200 text-gray-900' : 
//                             index === 2 ? 'bg-gradient-to-br from-amber-500 to-amber-400 text-white' : 
//                             'bg-blue-100 text-blue-800 border border-blue-200'
//                           }`}>
//                             {index + 1}
//                           </div>
//                           <div className="flex-1">
//                             <div className="font-medium text-gray-700">{player.name}</div>
//                             <div className="text-xs text-gray-500">Score: {player.score}</div>
//                           </div>
//                           <div className="text-sm font-bold text-yellow-600">
//                             {index === 0 ? '🏆 Gold' : index === 1 ? '🥈 Silver' : index === 2 ? '🥉 Bronze' : ''}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </section>

//         {/* Full Width Leaderboard */}
//         <section className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
//           <h2 className="text-xl font-bold mb-6 text-blue-600">
//             Weekly Leaderboard
//           </h2>
          
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="text-left text-gray-500 border-b border-gray-200">
//                   <th className="pb-3 pl-2">Rank</th>
//                   <th className="pb-3">Student</th>
//                   <th className="pb-3">Credits</th>
//                   <th className="pb-3">Tasks Completed</th>
//                   <th className="pb-3 pr-2">Progress</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { id: 1, name: 'Alex Johnson', credits: 445, tasks: 21, avatar: 'AJ' },
//                   { id: 2, name: 'Priya Patel', credits: 398, tasks: 19, avatar: 'PP' },
//                   { id: 3, name: 'Rahul Sharma', credits: 375, tasks: 18, avatar: 'RS' },
//                   { id: 4, name: 'Mia Chen', credits: 352, tasks: 17, avatar: 'MC' },
//                   { id: 5, name: 'David Kim', credits: 320, tasks: 15, avatar: 'DK' },
//                 ].map((student, index) => (
//                   <tr key={student.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
//                     <td className="py-4 pl-2">
//                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
//                         index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-300 text-gray-900' : 
//                         index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-200 text-gray-900' : 
//                         index === 2 ? 'bg-gradient-to-br from-amber-500 to-amber-400 text-white' : 
//                         'bg-blue-100 text-blue-800 border border-blue-200'
//                       }`}>
//                         {index + 1}
//                       </div>
//                     </td>
//                     <td className="py-4">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center font-bold mr-3 text-white">
//                           {student.avatar}
//                         </div>
//                         <div className="font-medium text-gray-700">{student.name}</div>
//                       </div>
//                     </td>
//                     <td className="py-4 font-bold text-blue-700">{student.credits}</td>
//                     <td className="py-4 text-gray-600">{student.tasks}</td>
//                     <td className="py-4 pr-2">
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div 
//                           className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" 
//                           style={{ width: `${(student.credits / 500) * 100}%` }}
//                         ></div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-blue-100 to-blue-200 py-8 px-4 border-t border-blue-300 mt-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h3 className="text-lg font-bold mb-4 text-blue-700">
//             EduGame Platform
//           </h3>
//           <p className="text-gray-600 text-sm mb-6 max-w-2xl mx-auto">
//             Combining education with gamification to make learning fun and competitive.
//             Track your progress, compete with friends, and unlock new challenges.
//           </p>
//           <div className="flex justify-center space-x-6 mb-6">
//             <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
//               <i className="fab fa-youtube"></i>
//             </a>
//             <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <div className="text-sm text-gray-500">
//             © {new Date().getFullYear()} EduGame. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;





// // import { useState, useEffect } from 'react';

// // const HomePage = () => {
// //   const [notices, setNotices] = useState([]);
// //   const [showNoticeForm, setShowNoticeForm] = useState(false);
// //   const [newNotice, setNewNotice] = useState({
// //     title: '',
// //     description: '',
// //     eventType: 'college',
// //     priority: 'normal',
// //     photo: null,
// //     photoPreview: ''
// //   });

// //   useEffect(() => {
// //     // Load notices from localStorage
// //     const savedNotices = localStorage.getItem('educationNotices');
// //     if (savedNotices) {
// //       setNotices(JSON.parse(savedNotices));
// //     }
// //   }, []);

// //   const saveNoticesToLocal = (updatedNotices) => {
// //     localStorage.setItem('educationNotices', JSON.stringify(updatedNotices));
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewNotice({
// //       ...newNotice,
// //       [name]: value
// //     });
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setNewNotice({
// //           ...newNotice,
// //           photo: file,
// //           photoPreview: reader.result
// //         });
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmitNotice = (e) => {
// //     e.preventDefault();
// //     const noticeWithId = {
// //       ...newNotice,
// //       id: Date.now(),
// //       date: new Date().toLocaleDateString()
// //     };

// //     const updatedNotices = [noticeWithId, ...notices];
// //     setNotices(updatedNotices);
// //     saveNoticesToLocal(updatedNotices);

// //     // Reset form
// //     setNewNotice({
// //       title: '',
// //       description: '',
// //       eventType: 'college',
// //       priority: 'normal',
// //       photo: null,
// //       photoPreview: ''
// //     });
// //     setShowNoticeForm(false);
// //   };

// //   const deleteNotice = (id) => {
// //     const updatedNotices = notices.filter(notice => notice.id !== id);
// //     setNotices(updatedNotices);
// //     saveNoticesToLocal(updatedNotices);
// //   };

// //   const getPriorityColor = (priority) => {
// //     switch (priority) {
// //       case 'urgent': return 'bg-red-600';
// //       case 'hot': return 'bg-orange-500';
// //       case 'important': return 'bg-yellow-500';
// //       default: return 'bg-blue-500';
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-gray-100">
// //       {/* Quotes Section */}
// //       <section className="py-12 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <h1 className="text-4xl font-bold text-center mb-12 text-purple-400">Inspirational Quotes on Education</h1>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {/* Gandhi Ji */}
// //             <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-purple-500/30 transition-shadow text-sm min-h-[220px]">
// //               <blockquote className="italic mb-3">
// //                 "Live as if you were to die tomorrow. Learn as if you were to live forever."
// //               </blockquote>
// //               <div className="flex items-center mt-auto">
// //                 <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">G</div>
// //                 <div>
// //                   <p className="font-medium text-base">Mahatma Gandhi</p>
// //                   <p className="text-gray-400 text-xs">Father of the Nation</p>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Nehru Ji */}
// //             <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-blue-500/30 transition-shadow text-sm min-h-[220px]">
// //               <blockquote className="italic mb-3">
// //                 "The object of education is to prepare the young to educate themselves throughout their lives."
// //               </blockquote>
// //               <div className="flex items-center mt-auto">
// //                 <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">N</div>
// //                 <div>
// //                   <p className="font-medium text-base">Jawaharlal Nehru</p>
// //                   <p className="text-gray-400 text-xs">First PM of India</p>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Abdul Kalam */}
// //             <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/30 transition-shadow text-sm min-h-[220px]">
// //               <blockquote className="italic mb-3">
// //                 "Education is the most powerful weapon which you can use to change the world."
// //               </blockquote>
// //               <div className="flex items-center mt-auto">
// //                 <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">A</div>
// //                 <div>
// //                   <p className="font-medium text-base">APJ Abdul Kalam</p>
// //                   <p className="text-gray-400 text-xs">Missile Man of India</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Communication Tools */}
// //       <section className="py-12 px-4 bg-gray-800">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Communication Tools we offers</h2>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {/* Voice Call */}
// //             <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
// //               <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
// //                 <i className="fas fa-phone-alt text-lg"></i>
// //               </div>
// //               <h3 className="text-lg font-semibold mb-1">Voice Call</h3>
// //               <p className="text-gray-300 text-sm mb-3">High-quality voice calls for instant connection</p>
// //               <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-full text-sm">
// //                 Start Call
// //               </button>
// //             </div>
            
// //             {/* Video Call */}
// //             <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
// //               <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
// //                 <i className="fas fa-video text-lg"></i>
// //               </div>
// //               <h3 className="text-lg font-semibold mb-1">Video Call</h3>
// //               <p className="text-gray-300 text-sm mb-3">Face-to-face virtual meetings with screen sharing</p>
// //               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
// //                 Start Video
// //               </button>
// //             </div>




// //             {/* Video Call */}
// //             <div className="bg-gray-700 p-3 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[200px] shadow-md">
// //               <div className="bg-red-500 w-14 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
// //                 <i className="fas fa-video text-lg"></i>
// //               </div>
// //               <h3 className="text-lg font-semibold mb-1">Noticeboard</h3>
// //               <p className="text-gray-300 text-sm mb-3">Notice board for sharing valuable events and opportunities</p>
// //               <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-1 rounded-full text-sm">
// //                 check Imp Notice
// //               </button>
// //             </div>
            
// //             {/* Group Chat */}
// //             <div className="bg-gray-700 p-5 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-h-[240px] shadow-md">
// //               <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
// //                 <i className="fas fa-comments text-lg"></i>
// //               </div>
// //               <h3 className="text-lg font-semibold mb-1">Group Chat</h3>
// //               <p className="text-gray-300 text-sm mb-3">Collaborate with your team in real-time chat rooms</p>
// //               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full text-sm">
// //                 Open Chat
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Notice Board Section */}
// //       <section className="py-12 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="flex justify-between items-center mb-8">
// //             <h2 className="text-3xl font-bold text-purple-400">Notice Board</h2>
// //             <button 
// //               onClick={() => setShowNoticeForm(!showNoticeForm)}
// //               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors flex items-center"
// //             >
// //               <i className="fas fa-plus mr-2"></i> Add Notice
// //             </button>
// //           </div>

// //           {/* Notice Form */}
// //           {showNoticeForm && (
// //             <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
// //               <h3 className="text-xl font-semibold mb-4 text-purple-300">Create New Notice</h3>
// //               <form onSubmit={handleSubmitNotice}>
// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label className="block text-gray-300 mb-2">Event Title</label>
// //                     <input
// //                       type="text"
// //                       name="title"
// //                       value={newNotice.title}
// //                       onChange={handleInputChange}
// //                       className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                       required
// //                     />
// //                   </div>

// //                   <div>
// //                     <label className="block text-gray-300 mb-2">Event Type</label>
// //                     <select
// //                       name="eventType"
// //                       value={newNotice.eventType}
// //                       onChange={handleInputChange}
// //                       className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                     >
// //                       <option value="college">College Event</option>
// //                       <option value="hackathon">Hackathon</option>
// //                       <option value="competition">Competition</option>
// //                       <option value="other">Other</option>
// //                     </select>
// //                   </div>

// //                   <div className="md:col-span-2">
// //                     <label className="block text-gray-300 mb-2">Description</label>
// //                     <textarea
// //                       name="description"
// //                       value={newNotice.description}
// //                       onChange={handleInputChange}
// //                       rows="4"
// //                       className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                       required
// //                     ></textarea>
// //                   </div>

// //                   <div>
// //                     <label className="block text-gray-300 mb-2">Priority</label>
// //                     <select
// //                       name="priority"
// //                       value={newNotice.priority}
// //                       onChange={handleInputChange}
// //                       className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                     >
// //                       <option value="normal">Normal</option>
// //                       <option value="important">Important</option>
// //                       <option value="hot">Hot</option>
// //                       <option value="urgent">Urgent</option>
// //                     </select>
// //                   </div>

// //                   <div>
// //                     <label className="block text-gray-300 mb-2">Event Photo</label>
// //                     <input
// //                       type="file"
// //                       accept="image/*"
// //                       onChange={handleFileChange}
// //                       className="w-full text-gray-300"
// //                     />
// //                     {newNotice.photoPreview && (
// //                       <div className="mt-2">
// //                         <img src={newNotice.photoPreview} alt="Preview" className="h-20 rounded-lg" />
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>

// //                 <div className="flex justify-end mt-6 space-x-4">
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowNoticeForm(false)}
// //                     className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-full transition-colors"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
// //                   >
// //                     Save Notice
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           )}

// //           {/* Notices List */}
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900">
// //             {notices.map(notice => (
// //               <div key={notice.id} className={`bg-gray-800 p-4 rounded-lg shadow-md border-l-4 ${getPriorityColor(notice.priority)}`}>
// //                 <div className="flex justify-between items-start mb-2">
// //                   <div>
// //                     <h3 className="text-lg font-semibold line-clamp-1">{notice.title}</h3>
// //                     <div className="flex items-center space-x-2 mt-1 text-xs text-gray-400">
// //                       <span>{notice.date}</span>
// //                       <span className="bg-gray-700 px-2 py-0.5 rounded-full text-purple-300">{notice.eventType}</span>
// //                       <span className={`px-2 py-0.5 rounded-full ${getPriorityColor(notice.priority)}`}>
// //                         {notice.priority}
// //                       </span>
// //                     </div>
// //                   </div>
// //                   <button
// //                     onClick={() => deleteNotice(notice.id)}
// //                     className="text-gray-400 hover:text-red-400"
// //                   >
// //                     <i className="fas fa-trash"></i>
// //                   </button>
// //                 </div>
// //                 {notice.photoPreview && (
// //                   <img src={notice.photoPreview} alt="Event" className="rounded-lg max-h-40 object-cover w-full" />
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer Section */}
// // <footer className="bg-gray-700 text-gray-200 mt-9 py-6">
// //   <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
    
// //     {/* Branding */}
// //     <div>
// //       <h3 className="text-xl font-bold text-purple-300 mb-3">EduConnect</h3>
// //       <p className="text-sm text-gray-300">
// //         Empowering students and institutions through seamless communication and updates.
// //       </p>
// //     </div>

// //     {/* Features */}
// //     <div>
// //       <h4 className="text-lg font-semibold text-purple-200 mb-3">Features We Offer</h4>
// //       <ul className="space-y-2 text-sm">
// //         <li>📌 Notice Board</li>
// //         <li>📞 Voice Call</li>
// //         <li>🎥 Video Call</li>
// //         <li>💬 Group Chat</li>
// //         <li>👥 Group Call</li>
// //       </ul>
// //     </div>

// //     {/* Links */}
// //     <div>
// //       <h4 className="text-lg font-semibold text-purple-200 mb-3">Quick Links</h4>
// //       <ul className="space-y-2 text-sm">
// //         <li><a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a></li>
// //         <li><a href="#" className="hover:text-purple-300 transition-colors">Terms of Use</a></li>
// //         <li><a href="#" className="hover:text-purple-300 transition-colors">Contact Us</a></li>
// //       </ul>
// //     </div>

// //   </div>

// //   <div className="text-center text-sm text-gray-400 mt-8">
// //     © {new Date().getFullYear()} EduConnect. All rights reserved.
// //   </div>
// // </footer>

// //     </div>
// //   );
// // };

// // export default HomePage;




// import { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const HomePage = () => {
//   // Game state
//   const [gameUnlocked, setGameUnlocked] = useState(false);
//   const [answeredQuestions, setAnsweredQuestions] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showGameSection, setShowGameSection] = useState(false);
  
//   // DSA Questions
//   const [dsaQuestions] = useState([
//     {
//       question: "Which data structure uses LIFO principle?",
//       options: ["Queue", "Stack", "Array", "Tree"],
//       answer: "Stack"
//     },
//     {
//       question: "What is the time complexity of binary search?",
//       options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
//       answer: "O(log n)"
//     },
//     {
//       question: "Which algorithm uses divide and conquer approach?",
//       options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
//       answer: "Merge Sort"
//     },
//     {
//       question: "What is the space complexity of quick sort?",
//       options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
//       answer: "O(log n)"
//     },
//     {
//       question: "Which data structure is used for BFS?",
//       options: ["Stack", "Queue", "Heap", "Hash Table"],
//       answer: "Queue"
//     },
//     {
//       question: "What is the worst case time complexity of quicksort?",
//       options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
//       answer: "O(n^2)"
//     },
//     {
//       question: "Which data structure has O(1) average time for search?",
//       options: ["Binary Search Tree", "Hash Table", "Linked List", "Stack"],
//       answer: "Hash Table"
//     },
//     {
//       question: "What is the height of a complete binary tree with n nodes?",
//       options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
//       answer: "O(log n)"
//     }
//   ]);

//   // Weekly credits data
//   const [weeklyCredits, setWeeklyCredits] = useState([
//     { day: 'Mon', tasks: 3, credits: 45 },
//     { day: 'Tue', tasks: 5, credits: 72 },
//     { day: 'Wed', tasks: 4, credits: 58 },
//     { day: 'Thu', tasks: 6, credits: 85 },
//     { day: 'Fri', tasks: 2, credits: 30 },
//     { day: 'Sat', tasks: 7, credits: 92 },
//     { day: 'Sun', tasks: 4, credits: 63 },
//   ]);

//   // Game leaderboard
//   const [gameLeaderboard, setGameLeaderboard] = useState([
//     { id: 1, name: 'CodeMaster', score: 1250, avatar: 'CM' },
//     { id: 2, name: 'AlgoKing', score: 1120, avatar: 'AK' },
//     { id: 3, name: 'DataStruct', score: 980, avatar: 'DS' },
//     { id: 4, name: 'BinaryTree', score: 875, avatar: 'BT' },
//     { id: 5, name: 'HashTable', score: 820, avatar: 'HT' },
//   ]);

//   // Daily performance pie chart data
//   const [dailyData, setDailyData] = useState([
//     { name: 'Lectures', value: 35, color: '#0088FE' },
//     { name: 'Practice', value: 25, color: '#00C49F' },
//     { name: 'Projects', value: 20, color: '#FFBB28' },
//     { name: 'Quizzes', value: 15, color: '#FF8042' },
//     { name: 'Break', value: 5, color: '#8884D8' },
//   ]);

//   // COLORS
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  
//   // Custom shape for pie chart
//   const RADIAN = Math.PI / 180;
//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   // Handle answer submission
//   const handleAnswer = (selectedAnswer) => {
//     const isCorrect = selectedAnswer === dsaQuestions[currentQuestion].answer;
//     setAnsweredQuestions(answeredQuestions + 1);
    
//     if (isCorrect) {
//       setCorrectAnswers(correctAnswers + 1);
//     }

//     // Move to next question or unlock game
//     if (currentQuestion < dsaQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }

//     // Unlock game if 4 correct answers
//     if (correctAnswers >= 3 || (isCorrect && correctAnswers === 3)) {
//       setGameUnlocked(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-gray-100">
//       {/* Main Content */}
//       <main className="container mx-auto py-8 px-4">
//         {/* Stats Overview */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* Weekly Credits */}
//           <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-gray-300 text-sm font-medium">Weekly Credits</h3>
//                 <p className="text-3xl font-bold mt-2">445</p>
//               </div>
//               <div className="bg-white/10 rounded-full p-2">
//                 <i className="fas fa-coins text-yellow-400"></i>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center text-sm">
//               <span className="text-green-400 mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
//               <span className="text-gray-300">from last week</span>
//             </div>
//           </div>

//           {/* Daily Goal */}
//           <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-gray-300 text-sm font-medium">Daily Goal</h3>
//                 <p className="text-3xl font-bold mt-2">3/5</p>
//               </div>
//               <div className="bg-white/10 rounded-full p-2">
//                 <i className="fas fa-bullseye text-purple-400"></i>
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" 
//                   style={{ width: '60%' }}
//                 ></div>
//               </div>
//             </div>
//           </div>

//           {/* Current Streak */}
//           <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-gray-300 text-sm font-medium">Current Streak</h3>
//                 <p className="text-3xl font-bold mt-2">7<span className="text-xl text-gray-300">days</span></p>
//               </div>
//               <div className="bg-white/10 rounded-full p-2">
//                 <i className="fas fa-fire text-orange-400"></i>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center text-sm">
//               <span className="text-green-400 mr-2"><i className="fas fa-arrow-up"></i> 2 days</span>
//               <span className="text-gray-300">new record</span>
//             </div>
//           </div>
//         </section>

//         {/* Charts Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           {/* Line Chart */}
//           <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
//             <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Weekly Credits Achieved
//             </h2>
//             <div className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                   data={weeklyCredits}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                   <XAxis dataKey="day" stroke="#9CA3AF" />
//                   <YAxis stroke="#9CA3AF" />
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: '#1F2937', 
//                       borderColor: '#4B5563', 
//                       borderRadius: '0.5rem',
//                       background: 'rgba(31, 41, 55, 0.8)',
//                       backdropFilter: 'blur(4px)'
//                     }}
//                     itemStyle={{ color: '#E5E7EB' }}
//                   />
//                   <Legend 
//                     wrapperStyle={{ paddingTop: '20px' }}
//                     formatter={(value) => <span className="text-gray-300">{value}</span>}
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="credits" 
//                     stroke="#8884d8" 
//                     strokeWidth={2}
//                     activeDot={{ r: 8 }} 
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="tasks" 
//                     stroke="#82ca9d" 
//                     strokeWidth={2}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Pie Chart */}
//           <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
//             <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Daily Activity Breakdown
//             </h2>
//             <div className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={dailyData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     label={renderCustomizedLabel}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="value"
//                   >
//                     {dailyData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: '#1F2937', 
//                       borderColor: '#4B5563', 
//                       borderRadius: '0.5rem',
//                       background: 'rgba(31, 41, 55, 0.8)',
//                       backdropFilter: 'blur(4px)'
//                     }}
//                     itemStyle={{ color: '#E5E7EB' }}
//                   />
//                   <Legend 
//                     wrapperStyle={{ paddingTop: '20px' }}
//                     formatter={(value) => <span className="text-gray-300">{value}</span>}
//                   />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </section>

//         {/* Game Section */}
//         <section className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm mb-8">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
//               DSA Challenge
//             </h2>
//             <button 
//               onClick={() => setShowGameSection(!showGameSection)}
//               className="px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
//             >
//               {showGameSection ? 'Hide Challenge' : 'Show Challenge'}
//             </button>
//           </div>

//           {showGameSection && (
//             <div className="mt-6">
//               {!gameUnlocked ? (
//                 <div className="bg-gray-800/50 p-6 rounded-xl">
//                   <h3 className="text-lg font-semibold mb-4">
//                     Answer 4 DSA questions correctly to unlock multiplayer game ({correctAnswers}/4 correct)
//                   </h3>
//                   <div className="bg-gray-700/50 p-4 rounded-lg mb-4">
//                     <h4 className="font-medium mb-2">{dsaQuestions[currentQuestion].question}</h4>
//                     <div className="grid grid-cols-2 gap-3 mt-4">
//                       {dsaQuestions[currentQuestion].options.map((option, i) => (
//                         <button
//                           key={i}
//                           onClick={() => handleAnswer(option)}
//                           className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors text-left"
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="text-sm text-gray-400">
//                     Progress: {answeredQuestions} of {dsaQuestions.length} questions attempted
//                   </div>
//                 </div>
//               ) : (
//                 <div className="bg-gray-800/50 p-6 rounded-xl">
//                   <div className="flex justify-between items-center mb-6">
//                     <h3 className="text-lg font-semibold text-green-400">
//                       🎉 Congratulations! Multiplayer Game Unlocked!
//                     </h3>
//                     <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-full transition-colors">
//                       Play Now
//                     </button>
//                   </div>

//                   <div className="bg-gray-700/30 p-4 rounded-lg">
//                     <h4 className="font-medium mb-3">Game Leaderboard</h4>
//                     <div className="space-y-3">
//                       {gameLeaderboard.map((player, index) => (
//                         <div key={player.id} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
//                           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${
//                             index === 0 ? 'bg-gradient-to-br from-yellow-500 to-yellow-300 text-gray-900' : 
//                             index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-300 text-gray-900' : 
//                             index === 2 ? 'bg-gradient-to-br from-amber-700 to-amber-600 text-white' : 
//                             'bg-gray-600 text-white'
//                           }`}>
//                             {index + 1}
//                           </div>
//                           <div className="flex-1">
//                             <div className="font-medium">{player.name}</div>
//                             <div className="text-xs text-gray-400">Score: {player.score}</div>
//                           </div>
//                           <div className="text-sm font-bold text-yellow-400">
//                             {index === 0 ? '🏆 Gold' : index === 1 ? '🥈 Silver' : index === 2 ? '🥉 Bronze' : ''}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </section>

//         {/* Full Width Leaderboard */}
//         <section className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
//           <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//             Weekly Leaderboard
//           </h2>
          
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="text-left text-gray-400 border-b border-gray-700">
//                   <th className="pb-3 pl-2">Rank</th>
//                   <th className="pb-3">Student</th>
//                   <th className="pb-3">Credits</th>
//                   <th className="pb-3">Tasks Completed</th>
//                   <th className="pb-3 pr-2">Progress</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { id: 1, name: 'Alex Johnson', credits: 445, tasks: 21, avatar: 'AJ' },
//                   { id: 2, name: 'Priya Patel', credits: 398, tasks: 19, avatar: 'PP' },
//                   { id: 3, name: 'Rahul Sharma', credits: 375, tasks: 18, avatar: 'RS' },
//                   { id: 4, name: 'Mia Chen', credits: 352, tasks: 17, avatar: 'MC' },
//                   { id: 5, name: 'David Kim', credits: 320, tasks: 15, avatar: 'DK' },
//                 ].map((student, index) => (
//                   <tr key={student.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
//                     <td className="py-4 pl-2">
//                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
//                         index === 0 ? 'bg-gradient-to-br from-yellow-500 to-yellow-300 text-gray-900' : 
//                         index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-300 text-gray-900' : 
//                         index === 2 ? 'bg-gradient-to-br from-amber-700 to-amber-600 text-white' : 
//                         'bg-gray-700 text-white'
//                       }`}>
//                         {index + 1}
//                       </div>
//                     </td>
//                     <td className="py-4">
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center font-bold mr-3">
//                           {student.avatar}
//                         </div>
//                         <div className="font-medium">{student.name}</div>
//                       </div>
//                     </td>
//                     <td className="py-4 font-bold">{student.credits}</td>
//                     <td className="py-4">{student.tasks}</td>
//                     <td className="py-4 pr-2">
//                       <div className="w-full bg-gray-700 rounded-full h-2.5">
//                         <div 
//                           className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" 
//                           style={{ width: `${(student.credits / 500) * 100}%` }}
//                         ></div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 py-8 px-4 border-t border-gray-700/50 backdrop-blur-sm mt-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//             EduGame Platform
//           </h3>
//           <p className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
//             Combining education with gamification to make learning fun and competitive.
//             Track your progress, compete with friends, and unlock new challenges.
//           </p>
//           <div className="flex justify-center space-x-6 mb-6">
//             <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
//               <i className="fab fa-youtube"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <div className="text-sm text-gray-500">
//             © {new Date().getFullYear()} EduGame. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HomePage = () => {
  // Game state
  const [gameUnlocked, setGameUnlocked] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showGameSection, setShowGameSection] = useState(false);
  
  // DSA Questions
  const [dsaQuestions] = useState([
    {
      question: "Which data structure uses LIFO principle?",
      options: ["Queue", "Stack", "Array", "Tree"],
      answer: "Stack"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      answer: "O(log n)"
    },
    {
      question: "Which algorithm uses divide and conquer approach?",
      options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
      answer: "Merge Sort"
    },
    {
      question: "What is the space complexity of quick sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      answer: "O(log n)"
    },
    {
      question: "Which data structure is used for BFS?",
      options: ["Stack", "Queue", "Heap", "Hash Table"],
      answer: "Queue"
    },
    {
      question: "What is the worst case time complexity of quicksort?",
      options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
      answer: "O(n^2)"
    },
    {
      question: "Which data structure has O(1) average time for search?",
      options: ["Binary Search Tree", "Hash Table", "Linked List", "Stack"],
      answer: "Hash Table"
    },
    {
      question: "What is the height of a complete binary tree with n nodes?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)"
    }
  ]);

  // Weekly credits data
  const [weeklyCredits, setWeeklyCredits] = useState([
    { day: 'Mon', tasks: 3, credits: 45 },
    { day: 'Tue', tasks: 5, credits: 72 },
    { day: 'Wed', tasks: 4, credits: 58 },
    { day: 'Thu', tasks: 6, credits: 85 },
    { day: 'Fri', tasks: 2, credits: 30 },
    { day: 'Sat', tasks: 7, credits: 92 },
    { day: 'Sun', tasks: 4, credits: 63 },
  ]);

  // Game leaderboard
  const [gameLeaderboard, setGameLeaderboard] = useState([
    { id: 1, name: 'CodeMaster', score: 1250, avatar: 'CM' },
    { id: 2, name: 'AlgoKing', score: 1120, avatar: 'AK' },
    { id: 3, name: 'DataStruct', score: 980, avatar: 'DS' },
    { id: 4, name: 'BinaryTree', score: 875, avatar: 'BT' },
    { id: 5, name: 'HashTable', score: 820, avatar: 'HT' },
  ]);

  // Daily performance pie chart data
  const [dailyData, setDailyData] = useState([
    { name: 'Lectures', value: 35, color: '#4DA8DA' },
    { name: 'Practice', value: 25, color: '#5CB85C' },
    { name: 'Projects', value: 20, color: '#F0AD4E' },
    { name: 'Quizzes', value: 15, color: '#D9534F' },
    { name: 'Break', value: 5, color: '#5BC0DE' },
  ]);

  // COLORS - Updated to sky blue palette
  const COLORS = ['#4DA8DA', '#5CB85C', '#F0AD4E', '#D9534F', '#5BC0DE'];
  
  // Custom shape for pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Handle answer submission
  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === dsaQuestions[currentQuestion].answer;
    setAnsweredQuestions(answeredQuestions + 1);
    
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    // Move to next question or unlock game
    if (currentQuestion < dsaQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    // Unlock game if 4 correct answers
    if (correctAnswers >= 3 || (isCorrect && correctAnswers === 3)) {
      setGameUnlocked(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 text-gray-800">
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Weekly Credits */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl border border-blue-300 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-600 text-sm font-medium">Weekly Credits</h3>
                <p className="text-3xl font-bold mt-2 text-blue-800">445</p>
              </div>
              <div className="bg-blue-100 rounded-full p-2 border border-blue-200">
                <i className="fas fa-coins text-yellow-500"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
              <span className="text-gray-600">from last week</span>
            </div>
          </div>

          {/* Daily Goal */}
          <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-2xl border border-cyan-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-600 text-sm font-medium">Daily Goal</h3>
                <p className="text-3xl font-bold mt-2 text-cyan-800">3/5</p>
              </div>
              <div className="bg-cyan-100 rounded-full p-2 border border-cyan-200">
                <i className="fas fa-bullseye text-cyan-500"></i>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" 
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Current Streak */}
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-600 text-sm font-medium">Current Streak</h3>
                <p className="text-3xl font-bold mt-2 text-orange-800">7<span className="text-xl text-orange-600">days</span></p>
              </div>
              <div className="bg-orange-100 rounded-full p-2 border border-orange-200">
                <i className="fas fa-fire text-orange-500"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 mr-2"><i className="fas fa-arrow-up"></i> 2 days</span>
              <span className="text-gray-600">new record</span>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Line Chart */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-blue-600">
              Weekly Credits Achieved
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weeklyCredits}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="day" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      borderColor: '#E5E7EB', 
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      borderWidth: '1px'
                    }}
                    itemStyle={{ color: '#1F2937' }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                    formatter={(value) => <span className="text-gray-600">{value}</span>}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="credits" 
                    stroke="#4DA8DA" 
                    strokeWidth={2}
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="tasks" 
                    stroke="#5CB85C" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-blue-600">
              Daily Activity Breakdown
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dailyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dailyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      borderColor: '#E5E7EB', 
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      borderWidth: '1px'
                    }}
                    itemStyle={{ color: '#1F2937' }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                    formatter={(value) => <span className="text-gray-600">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Game Section */}
        <section className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl border border-blue-200 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-700">
              DSA Challenge
            </h2>
            <button 
              onClick={() => setShowGameSection(!showGameSection)}
              className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-sm text-white"
            >
              {showGameSection ? 'Hide Challenge' : 'Show Challenge'}
            </button>
          </div>

          {showGameSection && (
            <div className="mt-6">
              {!gameUnlocked ? (
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    Answer 4 DSA questions correctly to unlock multiplayer game ({correctAnswers}/4 correct)
                  </h3>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-100">
                    <h4 className="font-medium mb-2 text-gray-700">{dsaQuestions[currentQuestion].question}</h4>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {dsaQuestions[currentQuestion].options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(option)}
                          className="px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors text-left border border-blue-200 text-gray-700"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Progress: {answeredQuestions} of {dsaQuestions.length} questions attempted
                  </div>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-green-600">
                      🎉 Congratulations! Multiplayer Game Unlocked!
                    </h3>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full transition-colors text-white">
                      Play Now
                    </button>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium mb-3 text-gray-700">Game Leaderboard</h4>
                    <div className="space-y-3">
                      {gameLeaderboard.map((player, index) => (
                        <div key={player.id} className="flex items-center bg-white p-3 rounded-lg border border-blue-100 shadow-xs">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 ${
                            index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-300 text-gray-900' : 
                            index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-200 text-gray-900' : 
                            index === 2 ? 'bg-gradient-to-br from-amber-500 to-amber-400 text-white' : 
                            'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-700">{player.name}</div>
                            <div className="text-xs text-gray-500">Score: {player.score}</div>
                          </div>
                          <div className="text-sm font-bold text-yellow-600">
                            {index === 0 ? '🏆 Gold' : index === 1 ? '🥈 Silver' : index === 2 ? '🥉 Bronze' : ''}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Full Width Leaderboard */}
        <section className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-blue-600">
            Weekly Leaderboard
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="pb-3 pl-2">Rank</th>
                  <th className="pb-3">Student</th>
                  <th className="pb-3">Credits</th>
                  <th className="pb-3">Tasks Completed</th>
                  <th className="pb-3 pr-2">Progress</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, name: 'Alex Johnson', credits: 445, tasks: 21, avatar: 'AJ' },
                  { id: 2, name: 'Priya Patel', credits: 398, tasks: 19, avatar: 'PP' },
                  { id: 3, name: 'Rahul Sharma', credits: 375, tasks: 18, avatar: 'RS' },
                  { id: 4, name: 'Mia Chen', credits: 352, tasks: 17, avatar: 'MC' },
                  { id: 5, name: 'David Kim', credits: 320, tasks: 15, avatar: 'DK' },
                ].map((student, index) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="py-4 pl-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-300 text-gray-900' : 
                        index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-200 text-gray-900' : 
                        index === 2 ? 'bg-gradient-to-br from-amber-500 to-amber-400 text-white' : 
                        'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center font-bold mr-3 text-white">
                          {student.avatar}
                        </div>
                        <div className="font-medium text-gray-700">{student.name}</div>
                      </div>
                    </td>
                    <td className="py-4 font-bold text-blue-700">{student.credits}</td>
                    <td className="py-4 text-gray-600">{student.tasks}</td>
                    <td className="py-4 pr-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" 
                          style={{ width: `${(student.credits / 500) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-100 to-blue-200 py-8 px-4 border-t border-blue-300 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-bold mb-4 text-blue-700">
            EduGame Platform
          </h3>
          <p className="text-gray-600 text-sm mb-6 max-w-2xl mx-auto">
            Combining education with gamification to make learning fun and competitive.
            Track your progress, compete with friends, and unlock new challenges.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} EduGame. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;