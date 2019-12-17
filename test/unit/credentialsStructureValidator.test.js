const assert = require('assert');
const {isCredentialsStructureValid} = require('../../server/validators/credentials.validator');

describe('Credentials structure validator', () => {
    it('should return false if password is empty', () => {
        const credentials = {
            login: 'GoodLogin',
            passwd: ''
        };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, false);
    });

    it('should return false if login is empty', () => {
        const credentials = {
            login: '',
            passwd: 'GoodPassword12345'
        };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, false);
    });

    it('should return false if both credentials are empty', () => {
        const credentials = { login: '', passwd: '' };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, false);
    });

    it('should return true if credentials are not empty', () => {
        const credentials = {
            login: 'GoodLogin',
            passwd: 'GoodPassword'
        };
        const result = isCredentialsStructureValid(credentials);
        assert.deepStrictEqual(result, true);
    });
});
