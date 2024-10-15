const express = require('express');
const { addParkingSpot, getAvailableParkingSpots } = require('../controllers/parkingController');
const { protectAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protectAdmin, addParkingSpot); // Admin adds parking spot
router.get('/', getAvailableParkingSpots); // Fetch available spots

module.exports = router;
