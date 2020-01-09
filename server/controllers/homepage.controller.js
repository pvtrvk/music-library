const {OK} = require('http-status-codes');
const news = [
    {
        heading: 'Billie Eilish woman of the Year!',
        image: '/img/billie.jpg',
        link: '/article/1',
        source: 'BILLBOARD'
    },
    {
        heading: `JLo's fab return with Jungle Dress!`,
        image: '/img/jlo-getty.jpg',
        link: '/article/2',
        source: 'BILLBOARD'
    },
];

const renderHomepage = (req, res, next) => {
    try {
        res.status(OK).render('homepage/index', { news });
    } catch (e) {
        next(e);
    }
};

module.exports = {
    renderHomepage
};
