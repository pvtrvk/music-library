const { OK } = require('http-status-codes');

const renderExplorePage = (req, res, next) => {
    res.status(OK).render('explore/index');
};

module.exports = {
    renderExplorePage
};
