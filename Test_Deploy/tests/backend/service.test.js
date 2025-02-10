const request = require('supertest');
const app = require('../../backend/server');

describe('Service API', () => {
  it('should create a new service', async () => {
    const res = await request(app)
      .post('/api/services')
      .send({
        name: 'Test Service',
        category: 'Test Category',
        price: 100,
        location: 'Test Location'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test Service');
  });

  it('should get all services', async () => {
    const res = await request(app).get('/api/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});