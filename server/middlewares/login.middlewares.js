const { BAD_REQUEST, OK } = require('http-status-codes');
const { isEmpty } = require('../helpers/dataParsers');

const validateLogin = (req, res, next) => {
    const { login, passwd } = req.body;

    if (isEmpty(login) || isEmpty(passwd)) {
        res.status(BAD_REQUEST).redirect('/login?valid=false');
        // next(new Error('Bad request'));
        return;
    }

    res.status(OK).render('user/index', { login });
    // res.status(OK).redirect('/user')
};

module.exports = {
    validateLogin
};
