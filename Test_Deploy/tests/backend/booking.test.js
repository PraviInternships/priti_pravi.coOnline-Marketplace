const request = require('supertest');
const app = require('../../backend/server');

describe('Booking API', () => {
  it('should create a new booking', async () => {
    const res = await request(app)
      .post('/api/bookings')
      .send({
        user: '60d0fe4f5311236168a109ca',
        service: '60d0fe4f5311236168a109cb',
        date: '2021-07-01T00:00:00.000Z'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('status', 'Pending');
  });

  it('should get all bookings', async () => {
    const res = await request(app).get('/api/bookings');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});