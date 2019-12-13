const assert = require('assert');

describe('User repository', async () => {
    it('returns null if user does not exists once findUser is called', async () => {
        const db = await require('../../server/database/connection')();
        const { findUser } = require('../../server/repositories/users.repository')(db);

        const login = 'Definitely_not_existing';
        const passwd = 'Bad_password_for_sure';

        const findUserOutput = await findUser({ login, passwd });
        assert.deepStrictEqual(findUserOutput, null);
    });
});
