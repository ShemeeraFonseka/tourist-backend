const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  bookingdatetime: { type: Date, required: true },
  destination: { type: String, required: true },
  request: { type: String, default: '' },
  datetime: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
