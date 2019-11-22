const userRouter = require('express').Router();

const { renderUserPage } = require('../controllers/user.controller');
const { isAdmin, validateCredentials } = require('../middlewares/user.middlewares');

userRouter.get('/user', (req, res) => res.status(404).end(`You're never gonna GET me`));
userRouter.post('/user', validateCredentials, isAdmin, renderUserPage);

module.exports = userRouter;
