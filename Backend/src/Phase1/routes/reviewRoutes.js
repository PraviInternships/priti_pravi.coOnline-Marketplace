const express = require('express');
const { addReview, getReviews } = require('../controllers/reviewController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, authorize(['customer']), addReview);
router.get('/', getReviews);

module.exports = router;