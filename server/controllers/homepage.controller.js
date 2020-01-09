const {OK} = require('http-status-codes');

module.exports = (db) => {
    const { getAllNews } = require('../repositories/news.repository')(db);

    const renderHomepage = async (req, res, next) => {
        const news = await getAllNews();

        res.status(OK).render('homepage/index', { news });
    };

    return {
        renderHomepage
    };
};
