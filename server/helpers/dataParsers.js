const isUndefined = variable =>
    typeof variable === 'undefined';

const isEmpty = variable =>
    isUndefined(variable) || variable === '' || variable == null;

module.exports = {
    isUndefined,
    isEmpty
};
