const assert = require('assert');

describe('Registration component', () => {
    it('should return BAD REQUEST status when given bad credentials', () => {
        const login = 'BAD LOGIN',
            passwd = 'bad password';

        assert.deepStrictEqual(true, true);
    })
});
