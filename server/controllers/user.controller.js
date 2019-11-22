const { OK } = require('http-status-codes');

const renderUserPage = (req, res, next) => {
    const { login } = req.body;

    res.status(OK).render('user/index', { login });
};

module.exports = {
    renderUserPage
};
