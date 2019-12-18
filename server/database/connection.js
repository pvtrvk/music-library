const MongoClient = require('mongodb').MongoClient;
const {MONGO_URL} = require('../config/mongo');

module.exports = () => MongoClient.connect(MONGO_URL, {
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function (client) {
    return client.db('music-library');
});
