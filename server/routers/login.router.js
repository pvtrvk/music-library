const loginRouter = require('express').Router();

const { renderLoginPage } = require('../controllers/login.controller');
const { validateLogin } = require('../middlewares/login.middlewares');

loginRouter.get('/login', renderLoginPage);
loginRouter.post('/login', validateLogin);

module.exports = loginRouter;
