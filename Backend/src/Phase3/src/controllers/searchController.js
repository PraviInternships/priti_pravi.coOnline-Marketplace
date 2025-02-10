const searchService = require('../services/searchService');

exports.searchServices = async (req, res) => {
  try {
    const { query } = req.query;
    const results = await searchService.searchServices(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};