const express = require('express');
const router = express.Router();
const GescomHomeController = require('../controllers/GescomHomeController');

router.use('/', GescomHomeController);

module.exports = router;
