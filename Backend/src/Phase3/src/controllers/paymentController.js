const paymentService = require('../services/paymentService');

exports.processPayment = async (req, res) => {
  try {
    const { amount, currency, source } = req.body;
    const charge = await paymentService.processPayment(amount, currency, source);
    res.status(200).json(charge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};