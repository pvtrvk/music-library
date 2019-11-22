const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const errorMiddleware = (err, req, res, next) => {
    console.log(err.stack);
    res.status(INTERNAL_SERVER_ERROR).render('errors/index');
};

module.exports = {
    errorMiddleware
};
