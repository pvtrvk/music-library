const assert = require('assert');
const { BAD_REQUEST } = require('http-status-codes');
const UserError = require('../../server/errors/error.user');

describe('User Error', () => {
    it('has dynamic error options assigning', () => {
        const errorOptions = {
            message: 'Bad credentials',
            statusCode: BAD_REQUEST
        }, mockedRes = {
            status: (code) => code,
            render: (url) => url,
            redirect: (url) => url
        };
        const error = new UserError(mockedRes, errorOptions);
        assert.deepStrictEqual(Object.keys(error), Object.keys(errorOptions));
    });
});
