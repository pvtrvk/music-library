module.exports = (db) => {
    const users = db.collection('users');


    return {
        findUser({ login, passwd }) {
            return users.findOne({ login, passwd }, {projection: {_id: 0}});
        }
    }
};
