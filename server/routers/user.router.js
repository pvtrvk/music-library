const userRouter = require('express').Router();

module.exports = (db) => {

    const {isAdmin, validateCredentialsSchema} = require('../middlewares/user.middlewares');
    const {DBAuthentication} = require('../controllers/user.controller')(db);

    userRouter.get('/user', (req, res) => res.status(404).end(`You're never gonna GET me`));
    userRouter.post('/user', validateCredentialsSchema, isAdmin, DBAuthentication);

    return userRouter;
};
