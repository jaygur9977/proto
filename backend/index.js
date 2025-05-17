// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"]
//   }
// });

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/proto', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Schemas
// const playerSchema = new mongoose.Schema({
//   playerId: String,
//   name: String,
//   todayCredits: { type: Number, default: 0 },
//   totalCredits: { type: Number, default: 0 },
//   level: { type: Number, default: 1 },
//   online: { type: Boolean, default: false },
//   lastActive: { type: Date, default: Date.now }
// });

// const questionSchema = new mongoose.Schema({
//   topic: String,
//   questionText: String,
//   options: [String],
//   correctAnswer: Number,
//   difficulty: String
// });

// const Player = mongoose.model('Player', playerSchema);
// const Question = mongoose.model('Question', questionSchema);

// // Sample data initialization
// const initializeData = async () => {
//   // Check if questions exist
//   const count = await Question.countDocuments();
//   if (count === 0) {
//     const sampleQuestions = [
//       {
//         topic: 'algorithms',
//         questionText: "What is the time complexity of merge sort?",
//         options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
//         correctAnswer: 1,
//         difficulty: "medium"
//       },
//       // Add more sample questions...
//     ];
//     await Question.insertMany(sampleQuestions);
//   }
// };

// initializeData();

// // API Routes
// app.get('/api/today-credits', async (req, res) => {
//   try {
//     // In a real app, get from authenticated user
//     const player = await Player.findOne({}).sort({ lastActive: -1 });
//     res.json({ credits: player?.todayCredits || 0 });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.get('/api/weekly-credits', async (req, res) => {
//   try {
//     // Simulated weekly data
//     res.json([
//       { day: 'Mon', credits: 45 },
//       { day: 'Tue', credits: 72 },
//       { day: 'Wed', credits: 58 },
//       { day: 'Thu', credits: 85 },
//       { day: 'Fri', credits: 30 },
//       { day: 'Sat', credits: 92 },
//       { day: 'Sun', credits: 63 }
//     ]);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.get('/api/leaderboard', async (req, res) => {
//   try {
//     const players = await Player.find().sort({ totalCredits: -1 }).limit(10);
//     res.json(players);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.get('/api/topics', async (req, res) => {
//   try {
//     const topics = await Question.distinct('topic');
//     res.json({ topics });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.get('/api/questions', async (req, res) => {
//   try {
//     const { topic } = req.query;
//     const questions = await Question.aggregate([
//       { $match: { topic } },
//       { $sample: { size: 5 } }
//     ]);
//     res.json({ questions });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.post('/api/join-queue', async (req, res) => {
//   try {
//     const { playerId } = req.body;
    
//     // Update or create player
//     await Player.findOneAndUpdate(
//       { playerId },
//       { 
//         online: true,
//         lastActive: new Date()
//       },
//       { upsert: true, new: true }
//     );
    
//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.post('/api/update-credits', async (req, res) => {
//   try {
//     const { playerId, credits } = req.body;
    
//     await Player.findOneAndUpdate(
//       { playerId },
//       { 
//         $inc: { todayCredits: credits / 10, totalCredits: credits / 10 },
//         online: false
//       }
//     );
    
//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Socket.io Logic
// const waitingQueue = [];

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('joinQueue', (player) => {
//     player.socketId = socket.id;
//     waitingQueue.push(player);
    
//     // If we have at least 2 players in queue, match them
//     if (waitingQueue.length >= 2) {
//       const player1 = waitingQueue.shift();
//       const player2 = waitingQueue.shift();
      
//       io.to(player1.socketId).emit('matchFound', [player1, player2]);
//       io.to(player2.socketId).emit('matchFound', [player1, player2]);
//     }
//   });

//   socket.on('selectTopic', (topic) => {
//     socket.broadcast.emit('topicSelected', topic);
//   });

//   socket.on('answer', (newScore) => {
//     socket.broadcast.emit('opponentAnswered', newScore);
//   });

//   socket.on('gameOver', (finalScores) => {
//     // Update credits for both players
//     finalScores.forEach(async (playerScore) => {
//       await Player.findOneAndUpdate(
//         { playerId: playerScore.id },
//         { 
//           $inc: { todayCredits: playerScore.score / 10, totalCredits: playerScore.score / 10 },
//           online: false
//         }
//       );
//     });
    
//     io.emit('gameOver', finalScores);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//     // Remove player from queue if they disconnect
//     const index = waitingQueue.findIndex(p => p.socketId === socket.id);
//     if (index !== -1) {
//       waitingQueue.splice(index, 1);
//     }
//   });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// backend.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/edugame', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(limiter);

// Database Models (defined inline)
const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  weeklyCredits: { type: Number, default: 0 },
  dailyGoal: {
    completed: { type: Number, default: 0 },
    total: { type: Number, default: 5 }
  },
  currentStreak: { type: Number, default: 0 },
  hasGameAccess: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', UserSchema);

const GameSessionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  score: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  timeTaken: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});
const GameSession = mongoose.model('GameSession', GameSessionSchema);

const DailyActivitySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  activityType: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  creditsEarned: { type: Number, required: true }
});
const DailyActivity = mongoose.model('DailyActivity', DailyActivitySchema);

const LeaderboardSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  avatar: { type: String, required: true },
  credits: { type: Number, required: true },
  tasks: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now }
});
const Leaderboard = mongoose.model('Leaderboard', LeaderboardSchema);

// Initialize sample data if needed
async function initializeSampleData() {
  const count = await User.countDocuments();
  if (count === 0) {
    // Create sample user
    const user = new User({
      userId: 'sample-user-1',
      username: 'SampleUser',
      email: 'sample@edugame.com',
      weeklyCredits: 445,
      dailyGoal: { completed: 3, total: 5 },
      currentStreak: 7,
      hasGameAccess: false
    });
    await user.save();

    // Create sample leaderboard entries
    const leaderboardEntries = [
      { userId: 'user-1', username: 'Alex Johnson', avatar: 'AJ', credits: 445, tasks: 21 },
      { userId: 'user-2', username: 'Priya Patel', avatar: 'PP', credits: 398, tasks: 19 },
      { userId: 'user-3', username: 'Rahul Sharma', avatar: 'RS', credits: 375, tasks: 18 },
      { userId: 'user-4', username: 'Mia Chen', avatar: 'MC', credits: 352, tasks: 17 },
      { userId: 'user-5', username: 'David Kim', avatar: 'DK', credits: 320, tasks: 15 }
    ];
    await Leaderboard.insertMany(leaderboardEntries);

    // Create sample game sessions
    const gameSessions = [
      { userId: 'user-1', username: 'CodeMaster', score: 1250, correctAnswers: 25, timeTaken: 360 },
      { userId: 'user-2', username: 'AlgoKing', score: 1120, correctAnswers: 22, timeTaken: 420 },
      { userId: 'user-3', username: 'DataStruct', score: 980, correctAnswers: 19, timeTaken: 380 },
      { userId: 'user-4', username: 'BinaryTree', score: 875, correctAnswers: 17, timeTaken: 400 },
      { userId: 'user-5', username: 'HashTable', score: 820, correctAnswers: 16, timeTaken: 450 }
    ];
    await GameSession.insertMany(gameSessions);

    console.log('Sample data initialized');
  }
}

// Routes
app.get('/api/user/stats', async (req, res) => {
  try {
    const user = await User.findOne({ userId: 'sample-user-1' }).lean();
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    res.json({
      weeklyCredits: user.weeklyCredits,
      dailyGoal: user.dailyGoal,
      currentStreak: user.currentStreak
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/user/weekly-credits', async (req, res) => {
  try {
    // Simulate weekly data
    res.json([
      { day: 'Mon', credits: 45 },
      { day: 'Tue', credits: 72 },
      { day: 'Wed', credits: 58 },
      { day: 'Thu', credits: 85 },
      { day: 'Fri', credits: 30 },
      { day: 'Sat', credits: 92 },
      { day: 'Sun', credits: 63 }
    ]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/user/daily-activity', async (req, res) => {
  try {
    res.json([
      { name: 'Lectures', value: 35 },
      { name: 'Practice', value: 25 },
      { name: 'Projects', value: 20 },
      { name: 'Quizzes', value: 15 },
      { name: 'Break', value: 5 }
    ]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find()
      .sort({ credits: -1 })
      .limit(5)
      .lean();
    res.json(leaderboard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/game/leaderboard', async (req, res) => {
  try {
    const gameLeaderboard = await GameSession.find()
      .sort({ score: -1 })
      .limit(5)
      .lean();
    res.json(gameLeaderboard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/game/unlock', async (req, res) => {
  try {
    await User.updateOne(
      { userId: 'sample-user-1' },
      { $set: { hasGameAccess: true } }
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await initializeSampleData();
});