const loginRouter = require('express').Router();

const {renderLoginPage, renderRegisterPage, registerUser} = require('../controllers/login.controller');
const {validateCredentialsSchema} = require('../middlewares/user.middlewares');

loginRouter.get('/login', renderLoginPage);
loginRouter.get('/register', renderRegisterPage);
loginRouter.post('/register', validateCredentialsSchema, registerUser);

module.exports = loginRouter;
