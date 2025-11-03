// models/Service.js
const mongoose = require('mongoose');

const travekaServiceSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('TravelaService', travekaServiceSchema);
