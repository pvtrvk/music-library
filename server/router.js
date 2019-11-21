const router = require('express').Router();
const { renderHomepage } = require('./controllers/homepage.controller');
const { renderLoginPage } = require('./controllers/login.controller');

router.get('/', renderHomepage);
router.get('/login', renderLoginPage);

module.exports = router;
