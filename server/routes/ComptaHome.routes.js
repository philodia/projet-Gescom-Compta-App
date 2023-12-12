const express = require('express');
const router = express.Router();
const ComptaHomeController = require('../controllers/ComptaHomeController');

router.use('/', ComptaHomeController);

module.exports = router;
