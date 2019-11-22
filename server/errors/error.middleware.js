const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const errorMiddleware = (err, req, res) => {
    console.log(err.stack);
    res.status(INTERNAL_SERVER_ERROR).render('errors/index', { message: err.info, status: err.statusCode });
};

module.exports = {
    errorMiddleware
};
