// models/Guide.js
const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Guide', GuideSchema);
