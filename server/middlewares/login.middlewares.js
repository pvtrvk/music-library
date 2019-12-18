const { REGISTER_URL } = require('../config/URLs');
const { BAD_REQUEST } = require('http-status-codes');
const { isCredentialsStructureValid, isPasswordStrongEnough } = require('../validators/credentials.validator');

module.exports = (db) => {
    const { findUserByUsername } = require('../repositories/users.repository')(db);

    const doesUserAlreadyExist = async (username) => {
        return Boolean(await findUserByUsername(username));
    };

    const validateCredentials = async (req, res, next) => {

        const { username, passwd } = req.body;

        if (!isCredentialsStructureValid({username, passwd})
            || !isPasswordStrongEnough(passwd)
            || await doesUserAlreadyExist(username)
        ) {
            res.status(BAD_REQUEST).render('register/index');
        } else {
            next();
        }

    };

    return {
        validateCredentials
    }
};
