const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const notificationRoutes = require('./src/routes/notificationRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const searchRoutes = require('./src/routes/searchRoutes');
const analyticsRoutes = require('./src/routes/analyticsRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/notifications', notificationRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/analytics', analyticsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));