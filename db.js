// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    let uri = 'mongodb+srv://tuyennguyen9xdev:FpiwHOsNy7ncM1b2@tuyennguyen9x.ohlxw.mongodb.net/playMusic'
  try {
    const conn = await mongoose.connect(uri)
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error(`MongoDB connection error`);
    process.exit(1); // Dừng server nếu kết nối thất bại
  }
};

module.exports = connectDB;

