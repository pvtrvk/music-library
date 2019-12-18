const {OK} = require('http-status-codes');

module.exports = (db) => {

    const {getAllSongs} = require('../repositories/songs.repository')(db);

    const renderExplorePage = async (req, res, next) => {
        const songs = await getAllSongs();

        res.status(OK).render('explore/index', {songs});
    };

    return {
        renderExplorePage
    }
};
