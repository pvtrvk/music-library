const router = require('express').Router();
const { renderHomepage } = require('./controllers/homepage.controller');

const loginRouter = require('./routers/login.router');

module.exports = (db) => {

    const { renderExplorePage } = require('./controllers/explore.controller')(db);

    router.get('/', renderHomepage);
    router.get('/user', (req, res) => res.status(404).end('No such page!'));
    router.get('/explore', renderExplorePage);

    router.use('/', loginRouter);

    return router;
};
