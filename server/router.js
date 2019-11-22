const router = require('express').Router();
const { renderHomepage } = require('./controllers/homepage.controller');

const loginRouter = require('./routers/login.router');
const userRouter = require('./routers/user.router');

module.exports = (db) => {

    const { renderExplorePage } = require('./controllers/explore.controller')(db);

    router.get('/', renderHomepage);
    router.get('/explore', renderExplorePage);

    router.use('/', loginRouter);
    router.use('/', userRouter);

    return router;
};
