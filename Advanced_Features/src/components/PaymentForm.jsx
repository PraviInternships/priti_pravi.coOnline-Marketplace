import React, { useState } from 'react';
import { processPayment } from '../services/paymentService';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [source, setSource] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paymentData = { amount, currency, source };
    const result = await processPayment(paymentData);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        placeholder="Currency"
      />
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Source"
      />
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;