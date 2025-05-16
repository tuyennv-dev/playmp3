const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  link: {
    type: String,
    unique: true,
    required: true,
  },
  numberRun: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true // tự động thêm createdAt và updatedAt
});

module.exports = mongoose.model('Link', linkSchema);
