const path = require('path');

const viewsDir = path.resolve(__dirname, '../../client/views');
const partialsDir = path.resolve(__dirname, '../../client/views/partials');
const layoutsDir = path.resolve(__dirname, '../../client/views');

module.exports = {
    viewsDir,
    partialsDir,
    layoutsDir
};
