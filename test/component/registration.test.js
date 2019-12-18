const http = require('supertest');
const { BAD_REQUEST, CONFLICT, OK } = require('http-status-codes');

const REGISTRATION_URL = '/register';
let request;

describe('Registration component', async () => {

    beforeEach(async () => {
        const db = await require('../../server/database/connection')();
        const app = require('../../server/app')(db);
        request = http(app);
    });

    it('should return BAD REQUEST status when given bad credentials', async () => {
        const login = 'BAD LOGIN',
            passwd = 'bad password';

        await request
            .post(REGISTRATION_URL)
            .send({ login, passwd })
            .set('Content-Type', 'application/json')
            .expect(BAD_REQUEST);
    });

    it('should return BAD REQUEST status when user-to-be password is too weak', async () => {
        const credentials = {
            login: 'GoodLogin',
            password: 'weakPassword'
        };

        await request
            .post(REGISTRATION_URL)
            .send(credentials)
            .set('Content-Type', 'application/json')
            .expect(BAD_REQUEST)
    });

    it('should return CONFLICT status when user-to-be login already exists', async () => {
        const credentials = {
            login: 'NewUser',
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

        };

        await request
            .post(REGISTRATION_URL)
            .send(credentials)
            .set('Content-Type', 'application/json')
            .expect(OK);

        await removeUserFromDB(credentials);
    });

});
