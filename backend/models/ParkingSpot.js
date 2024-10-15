const mongoose = require('mongoose');

const parkingSpotSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
  availability: { type: Boolean, required: true, default: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
}, { timestamps: true });

const ParkingSpot = mongoose.model('ParkingSpot', parkingSpotSchema);

module.exports = ParkingSpot;
