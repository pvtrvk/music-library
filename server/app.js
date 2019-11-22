const express = require('express');
const hbs = require('express-handlebars');

const { OK } = require('http-status-codes');

const { layoutsDir, partialsDir, viewsDir, clientDir } = require('./config/paths');

const { errorMiddleware } = require('./errors/error.middleware');

module.exports = (db) => {
    const router = require('./router')(db);
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.static(clientDir));

    app.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: layoutsDir,
        partialsDir: partialsDir
    }));

    app.set('view engine', 'hbs');
    app.set('views', viewsDir);
    app.use('/', router);

    // app.use(errorMiddleware);

    return app;
};
