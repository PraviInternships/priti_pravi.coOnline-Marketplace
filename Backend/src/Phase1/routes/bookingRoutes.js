const express = require('express');
const { bookService, getBookings } = require('../controllers/bookingController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, authorize(['customer']), bookService);
router.get('/', authenticate, authorize(['provider', 'admin']), getBookings);

module.exports = router;