const Booking = require('../models/Booking');
const User = require('../models/User');

exports.getAnalytics = async () => {
  const bookings = await Booking.find();
  const users = await User.find();
  // Add more analytics logic here
  return { bookings, users };
};