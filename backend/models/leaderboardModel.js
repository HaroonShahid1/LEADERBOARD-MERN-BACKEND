const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  gamesPlayed: Number,
  score: Number
}, { collection: 'teams' }); 

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
module.exports = Leaderboard;