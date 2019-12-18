const loginRouter = require('express').Router();

const {renderLoginPage, renderRegisterPage, registerUser} = require('../controllers/login.controller');

module.exports = (db) => {
    const { validateCredentials } = require('../middlewares/login.middlewares')(db);

    loginRouter.get('/login', renderLoginPage);
    loginRouter.get('/register', renderRegisterPage);
    loginRouter.post('/register', validateCredentials, registerUser);

    return loginRouter;
};
