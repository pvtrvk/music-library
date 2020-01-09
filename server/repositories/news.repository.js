module.exports = (db) => {
    const news = db.collection('news');

    const getAllNews = async () => {
        return news.find().toArray();
    };

    return {
        getAllNews
    }
};
