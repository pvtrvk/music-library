const express = require('express');
const hbs = require('express-handlebars');

const { OK } = require('http-status-codes');

const router = require('./router');

const { layoutsDir, partialsDir, viewsDir } = require('./config/paths');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: layoutsDir,
    partialsDir: partialsDir
}));

app.set('view engine', 'hbs');
app.set('views', viewsDir);
app.use('/', router);

module.exports = app;
