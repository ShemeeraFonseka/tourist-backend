const mongoose = require('mongoose');

const BookingStepSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('BookingStep', BookingStepSchema);
