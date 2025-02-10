const express = require('express');
const { getServices, createService } = require('../controllers/serviceController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getServices);
router.post('/', authenticate, authorize(['provider', 'admin']), createService);

module.exports = router;