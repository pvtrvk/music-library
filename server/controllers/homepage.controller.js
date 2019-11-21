const { OK } = require('http-status-codes');

const renderHomepage = (req, res, next) => {
    try {
        res.status(OK).render('homepage/index');
    } catch (e) {
        next(e);
    }
};

module.exports = {
    renderHomepage
};
