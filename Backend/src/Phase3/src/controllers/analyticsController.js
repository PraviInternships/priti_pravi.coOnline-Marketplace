const analyticsService = require('../services/analyticsService');

exports.getAnalytics = async (req, res) => {
  try {
    const data = await analyticsService.getAnalytics();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};