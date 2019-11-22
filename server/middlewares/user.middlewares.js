const { BAD_REQUEST, OK } = require('http-status-codes');

const { areCredentialsValid } = require('../validators/credentials.validator');

const validateCredentials = (req, res, next) => {
    const { login, passwd } = req.body;

    if (!areCredentialsValid({ login, passwd })) {
        res.status(BAD_REQUEST).redirect('/login?valid=false');
        // next(new Error('Bad request'));
        return;
    }

    next();
};

const isAdmin = (req, res, next) => {
    const { login, passwd } = req.body;

    if (login === 'admin' && passwd === 'admin') {
        res.status(OK).render('admin/index');
        return;
    }

    next();
};

module.exports = {
    validateCredentials,
    isAdmin
};
