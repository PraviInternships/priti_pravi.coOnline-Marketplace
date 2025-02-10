const notificationService = require('../services/notificationService');

exports.sendNotification = (req, res) => {
  const { userId, message } = req.body;
  notificationService.sendNotification(userId, message);
  res.status(200).send('Notification sent');
};