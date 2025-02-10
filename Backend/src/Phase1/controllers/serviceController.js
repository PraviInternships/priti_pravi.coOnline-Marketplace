const pool = require('../config/db');

const getServices = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM services');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createService = async (req, res) => {
    const { title, category, description, pricing, availability } = req.body;
    const userId = req.user.id;
    try {
        const result = await pool.query(
            'INSERT INTO services (user_id, title, category, description, pricing, availability) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [userId, title, category, description, pricing, availability]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getServices, createService };