const { isEmpty, isString } = require('../helpers/dataParsers');

const isCredentialsStructureValid = ({ login, passwd }) => {
    return !(isEmpty(login) || isEmpty(passwd));
};

const hasUpperCase = string =>
    isString(string) && (/[A-Z]/.test(string));

const hasLowerCase = string =>
    isString(string) && (/[a-z]/.test(string));

const hasNumber = string =>
    isString(string) && (/\d/.test(string));

const hasWhiteSpace = string =>
    isString(string) && (/\s/.test(string));

const isPasswordStrongEnough = (passwd) => {
    return passwd.length >= 8 && hasUpperCase(passwd) && hasLowerCase(passwd)
        && hasNumber(passwd) && !hasWhiteSpace(passwd);
};

module.exports = {
    isCredentialsStructureValid,
    isPasswordStrongEnough
};
