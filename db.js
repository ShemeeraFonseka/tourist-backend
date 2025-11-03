// db.js
import mongoose from 'mongoose';

// Get MongoDB URI from environment variable
const mongoURI = process.env.MONGO_URI;

// Check if MONGO_URI is set
if (!mongoURI) {
  console.error('❌ MONGO_URI environment variable is not defined');
  console.error('Please set it in Vercel Dashboard → Settings → Environment Variables');
  process.exit(1);
}

console.log('🔄 Connecting to MongoDB Atlas...');
console.log('Environment:', process.env.NODE_ENV || 'development');

// Connection options (removed deprecated options)
const options = {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
};

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB Atlas');
    console.log('📦 Database name:', mongoose.connection.name);
    console.log('🏠 Host:', mongoose.connection.host);
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed');
    console.error('Error:', err.message);
    console.error('\n🔍 Common causes:');
    console.error('  1. IP not whitelisted in MongoDB Atlas (add 0.0.0.0/0)');
    console.error('  2. MONGO_URI not set in Vercel environment variables');
    console.error('  3. Wrong username/password in connection string');
    console.error('  4. Network/firewall blocking connection');
    process.exit(1);
  });

// Connection event handlers
mongoose.connection.on('connected', () => {
  console.log('✅ Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ Mongoose disconnected from MongoDB');
});

// Handle process termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

export default mongoose;
