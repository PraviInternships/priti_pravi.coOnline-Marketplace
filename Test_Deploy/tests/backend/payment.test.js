const request = require('supertest');
const app = require('../../backend/server');

describe('Payment API', () => {
  it('should process a payment', async () => {
    const res = await request(app)
      .post('/api/payments/process')
      .send({
        amount: 1000,
        currency: 'USD',
        source: 'tok_visa'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'succeeded');
  });
});