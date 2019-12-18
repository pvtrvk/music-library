const loginRouter = require('express').Router();

const {renderLoginPage, renderRegisterPage, registerUser} = require('../controllers/login.controller');
const {validateCredentialsSchema} = require('../middlewares/user.middlewares');
const { validatePasswordStrength } = require('../middlewares/login.middlewares');

loginRouter.get('/login', renderLoginPage);
loginRouter.get('/register', renderRegisterPage);
loginRouter.post('/register', validateCredentialsSchema, validatePasswordStrength, );

module.exports = loginRouter;
