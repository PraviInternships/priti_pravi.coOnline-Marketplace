const wss = require('../config/websocket');

exports.sendNotification = (userId, message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ userId, message }));
    }
  });
};