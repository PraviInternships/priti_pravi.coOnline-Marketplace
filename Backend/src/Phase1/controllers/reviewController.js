const pool = require('../config/db');

const addReview = async (req, res) => {
    const { serviceId, rating, comment } = req.body;
    const userId = req.user.id;
    try {
        const result = await pool.query(
            'INSERT INTO reviews (user_id, service_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
            [userId, serviceId, rating, comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getReviews = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM reviews');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addReview, getReviews };