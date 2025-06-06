const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/data', analyticsController.getAnalytics);

module.exports = router;