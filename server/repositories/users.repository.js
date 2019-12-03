module.exports = (db) => {
    const users = db.collection('users');
    const passwords = db.collection('passwords');

    const getUserId = (login) => {
        return users.findOne({ username: login }, { projection: { "_id": 0, "userId": 1 }})
    };

    return {

        async findUser({ login, passwd }) {
            const { userId } = await getUserId(login);
            return passwords.findOne({ userId, passwd }, { projection: { _id: 0 }});
        }
    }
};
