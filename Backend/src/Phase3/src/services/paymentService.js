const stripe = require('../config/payment');

exports.processPayment = async (amount, currency, source) => {
  return await stripe.charges.create({
    amount,
    currency,
    source,
  });
};