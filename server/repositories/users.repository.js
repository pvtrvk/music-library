const {isNullOrUndefined} = require('../helpers/dataParsers');

module.exports = (db) => {
    const users = db.collection('users');
    const passwords = db.collection('passwords');

    const getUserId = async (login) => {
        const userId = await users.findOne({username: login}, {projection: {"_id": 0, "userId": 1}});
        return isNullOrUndefined(userId) ? {userId: null} : userId;
    };

    return {
        getUserId,
        async findUser({username, passwd}) {
            const {userId} = await getUserId(username);
            return passwords.findOne({userId, passwd}, {projection: {_id: 0}});
        },
        async findUserByUsername(username) {
            return users.findOne({username}, { projection: {_id: 0} });
        }
    }
};
