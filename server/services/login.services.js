module.exports = (db) => {

    const users = db.collection('users');
    const passwords = db.collection('passwords');
    const { getUserId } = require('../repositories/users.repository')(db);

    const getNextUserID = async () => {
        const result = await users.findOne({}, {sort: {userId: -1}, limit: 1});
        return isNaN(Number(result.userId)) ? false : Number(result.userId);
    };

    const insertUserIntoDB = async ({ username, passwd }) => {
        const currentUserId = await getNextUserID(users),
            nextUserId = Boolean(currentUserId) ? currentUserId + 1 : 0;
        const usersInsert = {
            userId: nextUserId,
            username,
            lists: []
        }, passwordsInsert = {
            userId: nextUserId,
            passwd
        };
        await users.insertOne(usersInsert);
        await passwords.insertOne(passwordsInsert);
    };

    const removeUserFromDB = async ({ username }) => {
        const { userId } = getUserId(username);
        await users.deleteOne({ userId });
        await passwords.deleteOne({ userId });
    };

    return {
        insertUserIntoDB,
        removeUserFromDB
    }

};
