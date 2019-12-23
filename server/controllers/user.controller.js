const {loginResponse} = require('../responses/user.responses');

module.exports = (db) => {

    const {findUser} = require('../repositories/users.repository')(db);

    return {
        async DBAuthentication(req, res, next) {
            const {username, passwd} = req.body;

            const areCredentialsValid = Boolean(await findUser({username, passwd}));

            loginResponse({areCredentialsValid, username}, res, next);
        }
    };
};
