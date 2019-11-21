const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const errorMiddleware = (req, res) => {
    console.log('Error occurred');
    res.status(INTERNAL_SERVER_ERROR).render('errors/index');
};

module.exports = {
    errorMiddleware
};
