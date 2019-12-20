const assert = require('assert');
const {isCredentialsStructureValid} = require('../../server/validators/credentials.validator');

describe('Credentials structure validator', () => {
    it('should return false if password is empty', () => {
        const credentials = {
            username: 'Goodusername',
            passwd: ''
        };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, false);
    });

    it('should return false if username is empty', () => {
        const credentials = {
            username: '',
            passwd: 'GoodPassword12345'
        };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, false);
    });

    it('should return false if both credentials are empty', () => {
        const credentials = { username: '', passwd: '' };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, false);
    });

    it('should return false if username contains not allowed chars', () => {
        const credentials = {
            username: 'Not/Allowed',
            passwd: 'GoodPassword12345'
        };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, false);
    });

    it('should return true if credentials are not empty and contain only allowed chars', () => {
        const credentials = {
            username: 'Goodusername',
            passwd: 'GoodPassword'
        };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, true);
    });
});
