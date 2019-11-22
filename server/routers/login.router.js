const loginRouter = new require('express').Router();

const { renderLoginPage } = require('../controllers/login.controller');

loginRouter.get('/login', renderLoginPage);

module.exports = loginRouter;
