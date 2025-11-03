// db.js
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://shemeerafonseka:shemeerafonseka@shemeeracluster.0zhgl.mongodb.net/tourist?retryWrites=true&w=majority&appName=ShemeeraCluster';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Error connecting to MongoDB:', err));

module.exports = mongoose;
