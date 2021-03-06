const {BAD_REQUEST, OK} = require('http-status-codes');
const {BAD_LOGIN_URL} = require('../config/URLs');

const {doesContainOnlyAllowedChars} = require('../validators/credentials.validator');

const validateCredentialsSchema = async (req, res, next) => {
    const {username, passwd} = req.body;

    if (doesContainOnlyAllowedChars(username) && doesContainOnlyAllowedChars(passwd)) {
        next();
    } else {
        res.status(BAD_REQUEST).redirect(BAD_LOGIN_URL);
    }

};

const isAdmin = (req, res, next) => {
    const {username, passwd} = req.body;

    if (username === 'admin' && passwd === 'admin') {
        res.status(OK).render('admin/index');
        return;
    }

    next();
};

module.exports = {
    validateCredentialsSchema,
    isAdmin
};
