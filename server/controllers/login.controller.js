const { OK } = require('http-status-codes');

const renderLoginPage = (req, res, next) => {
    try {
        res.status(OK).render('login/index');
    } catch (e) {
        next(e);
    }
};

module.exports = {
    renderLoginPage
};
