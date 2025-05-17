import { useState, useEffect, useRef } from 'react';
import { 
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer 
} from 'recharts';

const GamePage = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Alex Johnson', score: 1250, todayCredits: 8, online: true, avatar: 'AJ' },
    { id: 2, name: 'Priya Patel', score: 1120, todayCredits: 7, online: true, avatar: 'PP' },
    { id: 3, name: 'Rahul Sharma', score: 980, todayCredits: 6, online: false, avatar: 'RS' },
    { id: 4, name: 'Mia Chen', score: 875, todayCredits: 5, online: true, avatar: 'MC' },
    { id: 5, name: 'David Kim', score: 820, todayCredits: 4, online: false, avatar: 'DK' }
  ]);
  
  const [currentPlayer, setCurrentPlayer] = useState({
    id: 'user123',
    name: 'You',
    score: 0,
    todayCredits: 6,
    online: true
  });
  
  const [matchFound, setMatchFound] = useState(false);
  const [opponent, setOpponent] = useState(null);
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [gameOver, setGameOver] = useState(false);
  const [waitingForOpponent, setWaitingForOpponent] = useState(false);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  // Simulate finding a match
  const findMatch = () => {
    setWaitingForOpponent(true);
    setTimeout(() => {
      const randomOpponent = players[Math.floor(Math.random() * players.length)];
      setOpponent(randomOpponent);
      setMatchFound(true);
      setWaitingForOpponent(false);
    }, 2000);
  };

  // Handle topic selection
  const handleTopicSelect = (selectedTopic) => {
    setTopic(selectedTopic);
    // Simulate fetching questions
    setQuestions([
      {
        questionText: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correctAnswer: 1
      },
      // Add more questions...
    ]);
  };

  // Handle answer submission
  const handleAnswer = (answerIndex) => {
    if (questions[currentQuestion].correctAnswer === answerIndex) {
      setScore(prev => prev + 10);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setGameOver(true);
    }
  };

  // Countdown timer
  useEffect(() => {
    if (matchFound && topic && !gameOver && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
    }
  }, [matchFound, topic, gameOver, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="container mx-auto px-4 py-8">
        {/* Game Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-indigo-600">Multiplayer Challenge</h1>
          {matchFound && topic && !gameOver && (
            <div className="bg-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-medium">
              Time: <span className="font-mono">{formatTime(timeLeft)}</span>
            </div>
          )}
        </div>

        {!matchFound ? (
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-center">Available Players</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="pb-3">Player</th>
                    <th className="pb-3">Today's Credits</th>
                    <th className="pb-3 pr-2">Status</th>
                    <th className="pb-3 pr-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {players.filter(p => p.online && p.todayCredits >= 4).map(player => (
                    <tr key={player.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mr-3">
                            {player.avatar}
                          </div>
                          <div className="font-medium">{player.name}</div>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-green-500" 
                            style={{ width: `${player.todayCredits * 10}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{player.todayCredits}/10 credits</div>
                      </td>
                      <td className="py-4">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                          <span className="text-xs text-gray-500">Online</span>
                        </span>
                      </td>
                      <td className="py-4 pr-2">
                        <button 
                          onClick={() => {
                            setOpponent(player);
                            setMatchFound(true);
                          }}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
                        >
                          Challenge
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {players.filter(p => p.online && p.todayCredits >= 4).length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No available players with enough credits. Try again later.
              </div>
            )}
          </div>
        ) : !topic ? (
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-center">Select Challenge Topic</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Algorithms', 'JavaScript', 'React', 'Data Structures'].map((topicItem, index) => (
                <button
                  key={topicItem}
                  onClick={() => handleTopicSelect(topicItem.toLowerCase())}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all text-center"
                >
                  <div className="text-3xl mb-3" style={{ color: COLORS[index] }}>
                    {topicItem === 'Algorithms' && '🧮'}
                    {topicItem === 'JavaScript' && '⚙️'}
                    {topicItem === 'React' && '⚛️'}
                    {topicItem === 'Data Structures' && '📊'}
                  </div>
                  <h3 className="font-bold">{topicItem}</h3>
                </button>
              ))}
            </div>
          </div>
        ) : gameOver ? (
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold mb-8 text-center">Challenge Results</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center mb-8">
              <div className="text-center mb-8 md:mb-0 md:mr-12">
                <div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
                  {currentPlayer.name.charAt(0)}
                </div>
                <h3 className="font-bold">{currentPlayer.name}</h3>
                <p className="text-4xl font-bold mt-2 text-indigo-600">{score}</p>
                <p className="text-sm text-gray-500 mt-1">+{score/10} credits earned</p>
              </div>
              
              <div className="text-2xl font-bold my-4 md:my-0 md:mx-8">VS</div>
              
              <div className="text-center mb-8 md:mb-0 md:ml-12">
                <div className="w-24 h-24 rounded-full bg-purple-500 flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
                  {opponent?.name?.charAt(0)}
                </div>
                <h3 className="font-bold">{opponent?.name}</h3>
                <p className="text-4xl font-bold mt-2 text-purple-600">{opponentScore}</p>
              </div>
            </div>
            
            <div className="text-center text-xl font-bold mb-8">
              {score > opponentScore ? (
                <span className="text-green-600">🏆 You Won!</span>
              ) : score < opponentScore ? (
                <span className="text-red-600">😢 You Lost</span>
              ) : (
                <span className="text-yellow-600">🤝 Draw</span>
              )}
            </div>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Play Again
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Return Home
              </button>
            </div>
          </div>
        ) : questions.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
            <p>Loading questions...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Players */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h2 className="text-lg font-bold mb-4">Players</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mr-3">
                      {currentPlayer.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{currentPlayer.name}</div>
                      <div className="text-xs text-gray-500">You</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-indigo-600">{score}</div>
                </div>
                
                <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-3">
                      {opponent?.name?.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{opponent?.name}</div>
                      <div className="text-xs text-gray-500">Opponent</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-purple-600">{opponentScore}</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Topic: <span className="capitalize">{topic}</span></h3>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-2 rounded-full bg-indigo-500" 
                    style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </div>
            </div>
            
            {/* Question */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h2 className="text-xl font-bold mb-6">
                {questions[currentQuestion]?.questionText}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {questions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GamePage;