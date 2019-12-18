const assert = require('assert');
const http = require('supertest');
const { BAD_REQUEST, CONFLICT } = require('http-status-codes');

const REGISTRATION_URL = '/register';

describe('Registration component', async () => {

    const db = await require('../../server/database/connection')();
    const app = require('../../server/app')(db);
    const request = http(app);

    it('should return BAD REQUEST status when given bad credentials', async () => {
        const login = 'BAD LOGIN',
            passwd = 'bad password';

        const result = await request
            .post(REGISTRATION_URL)
            .send({ login, passwd })
            .expect(BAD_REQUEST);
    });

    it('should return CONFLICT status when user-to-be login already exists', async () => {
        const credentials = {
            login: 'NewUser',
            passwd: 'SuperStrong12345'
        };

        await createUserInDB(credentials);

        const result = request
            .post(REGISTRATION_URL)
            .send(credentials)
            .expect(CONFLICT)
    })

});
