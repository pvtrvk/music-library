const router = require('express').Router();

module.exports = (db) => {

    const {renderHomepage} = require('./controllers/homepage.controller')(db);
    const {renderExplorePage} = require('./controllers/explore.controller')(db);
    const userRouter = require('./routers/user.router')(db);
    const loginRouter = require('./routers/login.router')(db);

    router.get('/', renderHomepage);
    router.get('/explore', renderExplorePage);

    router.use('/', loginRouter);
    router.use('/', userRouter);

    return router;
};
