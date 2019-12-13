const { OK } = require('http-status-codes');

const renderLoginPage = (req, res, next) => {

    let message = '';
    const isRedirected = req.query.b;
    if (isRedirected) {
        message = 'Bad Request!';
    }

    res.status(OK).render('login/index', { message });
};

const renderRegisterPage = (req, res, next) => {
    res.status(OK).render('register/index');
};

module.exports = {
    renderLoginPage,
    renderRegisterPage
};
