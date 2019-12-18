const { BAD_LOGIN_URL } = require('../config/URLs');
const { BAD_REQUEST } = require('http-status-codes');
const { isPasswordStrongEnough } = require('../validators/credentials.validator');

const validatePasswordStrength = (req, res, next) => {
    const { passwd } = req.body;

    if (!isPasswordStrongEnough(passwd)) {
        res.status(BAD_REQUEST).redirect(BAD_LOGIN_URL)
    }

    next();
};

module.exports = {
    validatePasswordStrength
};
