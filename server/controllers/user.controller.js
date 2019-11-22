const { OK } = require('http-status-codes');
const { loginResponse } = require('../responses/user.responses');

module.exports = (db) => {

    const { findUser } = require('../repositories/users.repository')(db);

    return {
        async validateCredentialsInDB (req, res, next) {
            const { login, passwd } = req.body;

            const areCredentialsValid = !!await findUser({login, passwd});

            loginResponse({ areCredentialsValid, login }, res);
        }
    };
};
