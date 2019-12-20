const {isEmpty, isNullOrUndefined, isString} = require('../helpers/dataParsers');

const doesContainOnlyAllowedChars = string =>
    isString(string) && (/^([A-Za-z0-9])+$/).test(string);

const isCredentialsStructureValid = ({username, passwd}) => {
    return !(isEmpty(username) || isEmpty(passwd) || isNullOrUndefined(username)
        || isNullOrUndefined(passwd)) && doesContainOnlyAllowedChars(username);
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
    doesContainOnlyAllowedChars,
    isCredentialsStructureValid,
    isPasswordStrongEnough
};
