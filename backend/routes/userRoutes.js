const express = require('express');
const { signUpUser, signInUser } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signUpUser);
router.post('/signin', signInUser);

module.exports = router;
