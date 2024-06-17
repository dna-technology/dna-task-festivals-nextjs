import request from 'supertest';
import assert from 'node:assert';
import { app, server } from '../../src';

describe('Auth router', () => {
    afterAll(() => server.close());

    describe('POST /login', () => {
        it('should return user data', async () => {
            // when
            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: 'test@example.com'
                });

            // then
            assert.strictEqual(response.status, 200);
        });
    });
});
