const loginRouter = require('express').Router();


module.exports = (db) => {
    const { doesUserAlreadyExist, validateCredentials } = require('../middlewares/login.middlewares')(db);
    const {renderLoginPage, renderRegisterPage, registerUser} = require('../controllers/login.controller')(db);

    loginRouter.get('/login', renderLoginPage);
    loginRouter.get('/register', renderRegisterPage);
    loginRouter.post('/register', validateCredentials, doesUserAlreadyExist, registerUser);

    return loginRouter;
};
