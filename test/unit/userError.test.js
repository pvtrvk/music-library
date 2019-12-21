const assert = require('assert');
const { BAD_REQUEST } = require('http-status-codes');
const UserError = require('../../server/errors/error.user');

describe('User Error', () => {
    it('has dynamic error options assigning', () => {
        const errorOptions = {
            message: 'Bad credentials',
            statusCode: BAD_REQUEST
        };
        const error = new UserError({}, errorOptions);
        assert.deepStrictEqual(Object.keys(error), Object.keys(errorOptions));
    });
});
