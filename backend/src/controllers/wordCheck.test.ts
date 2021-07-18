import supertest from 'supertest';
import { server } from '../server';

describe('GET endpoints', () => {
  test('fetch new word', async () => {
    const res = await supertest(server).get('/api/v1/game/wordcheck/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('definitions');
    server.close();
  });
});
