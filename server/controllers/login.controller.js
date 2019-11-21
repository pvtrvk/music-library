const { BAD_REQUEST, OK } = require('http-status-codes');
const { isEmpty } = require('../helpers/dataParsers');

const renderLoginPage = (req, res, next) => {
    try {
        res.status(OK).render('login/index');
    } catch (e) {
        next(e);
    }
};

const validateLogin = (req, res, next) => {
    const { login, passwd } = req.body;

    if (isEmpty(login) || isEmpty(passwd)) {
        res.status(BAD_REQUEST).redirect('/login');
        return;
    }

    res.status(OK).render('user/index', { login });
};

module.exports = {
    renderLoginPage,
    validateLogin
};
