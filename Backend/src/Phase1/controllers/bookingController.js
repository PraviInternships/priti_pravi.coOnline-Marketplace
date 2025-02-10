const pool = require('../config/db');

const bookService = async (req, res) => {
    const { serviceId, status, payment } = req.body;
    const userId = req.user.id;
    try {
        const result = await pool.query(
            'INSERT INTO bookings (user_id, service_id, status, payment) VALUES ($1, $2, $3, $4) RETURNING *',
            [userId, serviceId, status, payment]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getBookings = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM bookings');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { bookService, getBookings };