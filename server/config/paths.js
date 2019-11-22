const path = require('path');

const viewsDir = path.resolve(__dirname, '../../client/views');
const partialsDir = path.resolve(__dirname, '../../client/views/partials');
const layoutsDir = path.resolve(__dirname, '../../client/views');
const clientDir = path.resolve(__dirname, '../../client');

module.exports = {
    clientDir,
    layoutsDir,
    partialsDir,
    viewsDir
};
