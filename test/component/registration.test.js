const http = require('supertest');
const { BAD_REQUEST, CONFLICT, OK } = require('http-status-codes');

const REGISTRATION_URL = '/register';
let request, insertUserIntoDB, removeUserFromDB;

describe('Registration component', async () => {

    beforeEach(async () => {
        const db = await require('../../server/database/connection')();
        const app = require('../../server/app')(db);
        const services = require('../../server/services/login.services')(db);
        request = http(app);
        insertUserIntoDB = services.insertUserIntoDB;
        removeUserFromDB = services.removeUserFromDB;
    });

    it('should return BAD REQUEST status when given bad credentials', async () => {
        const username = 'BAD username',
            passwd = 'bad password';

        await request
            .post(REGISTRATION_URL)
            .send({ username, passwd })
            .set('Content-Type', 'application/json')
            .expect(BAD_REQUEST);
    });

    it('should return BAD REQUEST status when user-to-be password is too weak', async () => {
        const credentials = {
            username: 'Goodusername',
            password: 'weakPassword'
        };

        await request
            .post(REGISTRATION_URL)
            .send(credentials)
            .set('Content-Type', 'application/json')
            .expect(BAD_REQUEST)
    });

    it('should return CONFLICT status when user-to-be username already exists', async () => {
        const credentials = {
            username: 'NewUser',
            passwd: 'SuperStrong12345'
        };

        await insertUserIntoDB(credentials);

        await request
            .post(REGISTRATION_URL)
            .send(credentials)
            .set('Content-Type', 'application/json')
            .expect(CONFLICT);

        await removeUserFromDB(credentials);
    });

    it('should return OK status when credentials meet requirements', async () => {
        const credentials = {
            username: 'GoodUsername123',
            passwd: 'StrongPass123'
        };

        await request
            .post(REGISTRATION_URL)
            .send(credentials)
            .set('Content-Type', 'application/json')
            .expect(OK);

        await removeUserFromDB(credentials);
    });

});
