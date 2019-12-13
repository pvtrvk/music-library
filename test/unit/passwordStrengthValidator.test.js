const assert = require('assert');
const { isPasswordStrongEnough } = require('../../server/validators/credentials.validator');

describe('Password Strength Validator', () => {

    it('should return false when passwd does not contain digit', () => {
        const passwordWithNoDigits = 'SuperStrongPassword';
        const isPasswordStrong = isPasswordStrongEnough(passwordWithNoDigits);

        assert.deepStrictEqual(isPasswordStrong, false);
    });

    it('should return false when passwd is shorter than 8 chars', () => {
        const tooShortPasswd = '1Strong';
        const isPasswordStrong = isPasswordStrongEnough(tooShortPasswd);

        assert.deepStrictEqual(isPasswordStrong, false);
    });

    it('should return false when passwd doesn\'t contain uppercase', () => {
        const noUppercase = 'superstrongpassword123';
        const isPasswordStrong = isPasswordStrongEnough(noUppercase);

        assert.deepStrictEqual(isPasswordStrong, false);
    });

    it('should return false when passwd doesn\'t contain lowercase', () => {
       const noLowercase = 'SUPERSTRONG123456';
       const isPasswordStrong = isPasswordStrongEnough(noLowercase);

       assert.deepStrictEqual(isPasswordStrong, false);
    });

    it('should return false when passwd contains space char', () => {
       const withSpace = 'Definitely Bad12345';
       const isPasswordStrong = isPasswordStrongEnough(withSpace);

       assert.deepStrictEqual(isPasswordStrong, false);
    });

});
