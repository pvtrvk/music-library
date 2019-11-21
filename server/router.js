const router = require('express').Router();
const { renderHomepage } = require('./controllers/homepage.controller');
const { renderLoginPage, validateLogin } = require('./controllers/login.controller');

router.get('/', renderHomepage);
router.get('/login', renderLoginPage);
router.get('/user', (req, res) => res.status(404).end('No such page!'));

router.post('/login', validateLogin);

module.exports = router;
