import { useState } from 'react';
import { processPayment } from '../services/paymentService';

const usePayment = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async (paymentData) => {
    try {
      const result = await processPayment(paymentData);
      setPaymentStatus(result);
    } catch (error) {
      setPaymentStatus({ error: error.message });
    }
  };

  return { paymentStatus, handlePayment };
};

export default usePayment;