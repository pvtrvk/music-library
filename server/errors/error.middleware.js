const {INTERNAL_SERVER_ERROR} = require('http-status-codes');

const errorMiddleware = (err, req, res) => {
    console.log(err.stack);
    console.log(res);
    res.render('errors/index', {message: err.info, status: err.statusCode});
};

module.exports = {
    errorMiddleware
};
