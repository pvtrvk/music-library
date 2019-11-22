const userRouter = require('express').Router();

module.exports = (db) => {

    const { isAdmin, validateCredentials } = require('../middlewares/user.middlewares');
    const { validateCredentialsInDB } = require('../controllers/user.controller')(db);

    userRouter.get('/user', (req, res) => res.status(404).end(`You're never gonna GET me`));
    userRouter.post('/user', validateCredentials, isAdmin, validateCredentialsInDB);

    return userRouter;
};
