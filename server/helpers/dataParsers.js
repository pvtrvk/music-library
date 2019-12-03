const isUndefined = variable =>
    typeof variable === 'undefined';

const isEmpty = variable =>
    isUndefined(variable) || variable === '' || variable == null;

const isNullOrUndefined = variable =>
    variable == null;

module.exports = {
    isEmpty,
    isNullOrUndefined,
    isUndefined
};
