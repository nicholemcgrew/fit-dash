// userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:userId', userController.getUserInfo);

module.exports = router;
