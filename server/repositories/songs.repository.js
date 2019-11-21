module.exports = (db) => {
    const getAllSongs = async () => db.collection('songs').find().toArray();

    return {
        getAllSongs
    }
};
