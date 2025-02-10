import axios from 'axios';

export const processPayment = async (paymentData) => {
  const response = await axios.post('/api/payments/process', paymentData);
  return response.data;
};