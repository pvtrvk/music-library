const {BAD_REQUEST, OK} = require('http-status-codes');
const {BAD_REQUEST_LOGIN_URL} = require('../config/URLs');

const {isCredentialsStructureValid} = require('../validators/credentials.validator');

const validateCredentialsSchema = async (req, res, next) => {
    const {login, passwd} = req.body;

    if (!isCredentialsStructureValid({login, passwd})) {
        res.status(BAD_REQUEST).redirect(BAD_REQUEST_LOGIN_URL);
        return;
    }

    next();
};

const isAdmin = (req, res, next) => {
    const {login, passwd} = req.body;

    if (login === 'admin' && passwd === 'admin') {
        res.status(OK).render('admin/index');
        return;
    }

    next();
};

module.exports = {
    validateCredentialsSchema,
    isAdmin
};
