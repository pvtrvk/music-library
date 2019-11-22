const { OK } = require('http-status-codes');

const renderLoginPage = (req, res, next) => {

    let message = '';
    const isRedirected = req.query.valid;
    if (isRedirected) {
        message = 'Bad Request!';
    }

    res.status(OK).render('login/index', { message });
};

module.exports = {
    renderLoginPage
};
