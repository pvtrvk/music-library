const loginRouter = require('express').Router();

const { renderLoginPage, renderRegisterPage } = require('../controllers/login.controller');
const { validateCredentialsSchema } = require('../middlewares/user.middlewares');

loginRouter.get('/login', renderLoginPage);
loginRouter.get('/register', renderRegisterPage);
loginRouter.post('/register', validateCredentialsSchema);

module.exports = loginRouter;
