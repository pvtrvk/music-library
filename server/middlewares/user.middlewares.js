const { BAD_REQUEST, OK } = require('http-status-codes');

const { isCredentialsStructureValid } = require('../validators/credentials.validator');

const validateCredentials = async (req, res, next) => {
    const { login, passwd } = req.body;

    if (!isCredentialsStructureValid({ login, passwd })) {
        res.status(BAD_REQUEST).redirect('/login?b=-1');
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
