const MongoClient = require('mongodb').MongoClient;
const { MONGO_URL } = require('../config/mongo');

module.exports = () => MongoClient.connect(MONGO_URL, { bufferMaxEntries: 0, useNewUrlParser: true }).then(client => client);
