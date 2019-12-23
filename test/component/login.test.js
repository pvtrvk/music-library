const assert = require('assert');
const http = require('supertest');
const { BAD_REQUEST, OK } = require('http-status-codes');

let request, insertUserIntoDB, removeUserFromDB;
const LOGIN_URL = '/user';

describe('Logging', () => {

    beforeEach(async () => {
        const db = await require('../../server/database/connection')();
        const app = require('../../server/app')(db);
        request = http(app);
        const services = require('../../server/services/login.services')(db);
        insertUserIntoDB = services.insertUserIntoDB;
        removeUserFromDB = services.removeUserFromDB;
    });

    it('should REDIRECT when given username does not exist', async () => {
        const credentials = {
            username: 'NotExisting',
            passwd: '123'
        };

        await request
            .post(LOGIN_URL)
            .send(credentials)
            .expect(302)
            .then((res) => {
                const wasRedirected = res.header['location'].toLowerCase().indexOf('b=-1') !== -1;
                assert.deepStrictEqual(wasRedirected, true);
            })
    });

    it('should return OK status when given good credentials', async () => {

        const credentials = {
            username: 'CoolestTestUserEver',
            passwd: 'SuperStrongPass12345'
        };
        await insertUserIntoDB(credentials);

        await request
            .post(LOGIN_URL)
            .send(credentials)
            .expect(OK);

        await removeUserFromDB(credentials);
    });
});
