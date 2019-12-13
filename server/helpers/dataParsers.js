const isUndefined = variable =>
    typeof variable === 'undefined';

const isString = variable =>
    typeof variable === 'string';

const isEmpty = variable =>
    isUndefined(variable) || variable === '' || variable == null;

const isNullOrUndefined = variable =>
    variable == null;

module.exports = {
    isEmpty,
    isNullOrUndefined,
    isString,
    isUndefined
};
