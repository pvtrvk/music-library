const {OK} = require('http-status-codes');

const renderLoginPage = (req, res, next) => {

    let message = '';
    const isRedirected = req.query.b;
    if (isRedirected) {
        message = 'Bad Request!';
    }

    res.status(OK).render('login/index', {message});
};

const renderRegisterPage = (req, res, next) => {
    res.status(OK).render('register/index');
};

module.exports = (db) => {

    const { insertUserIntoDB } = require('../services/login.services')(db);

    const registerUser = async (req, res, next) => {
        const {login, passwd} = req.body;

        await insertUserIntoDB({ login, passwd });

        res.status(200).render('login/index', { message: 'User successfully created!', isPositive: true });
    };

    return {
        registerUser,
        renderLoginPage,
        renderRegisterPage
    };
};




