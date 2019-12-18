const {loginResponse} = require('../responses/user.responses');

module.exports = (db) => {

    const {findUser} = require('../repositories/users.repository')(db);

    return {
        async DBAuthentication(req, res, next) {
            const {login, passwd} = req.body;

            const areCredentialsValid = Boolean(await findUser({login, passwd}));

            loginResponse({areCredentialsValid, login}, res);
        }
    };
};
