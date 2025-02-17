const request = require('supertest');
const app = require('../server');


describe('GET /users-3', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
  });
});
