// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Service', serviceSchema);
