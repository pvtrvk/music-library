const express = require('express');
const hbs = require('express-handlebars');

const { OK } = require('http-status-codes');

const { layoutsDir, partialsDir, viewsDir } = require('./config/paths');

const app = express();

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: layoutsDir,
    partialsDir: partialsDir
}));

app.set('view engine', 'hbs');
app.set('views', viewsDir);

app.get('/', (req, res, next) => {
    res.status(OK).render('homepage/index');
});

module.exports = app;
