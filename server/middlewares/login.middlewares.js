const { BAD_REQUEST, CONFLICT } = require('http-status-codes');
const { isCredentialsStructureValid, isPasswordStrongEnough } = require('../validators/credentials.validator');

module.exports = (db) => {
    const { findUserByUsername } = require('../repositories/users.repository')(db);

    const doesUserAlreadyExist = async (req, res, next) => {
        const { username } = req.body;
        const doesExist = Boolean(await findUserByUsername(username));
        if (doesExist) {
            res.status(CONFLICT).render('register/index');
            return;
        }

        next();
    };

    const validateCredentials = async (req, res, next) => {

        const { username, passwd } = req.body;

        if (!isCredentialsStructureValid({username, passwd})
            || !isPasswordStrongEnough(passwd)
        ) {
            res.status(BAD_REQUEST).render('register/index');
        } else {
            next();
        }

    };

    return {
        doesUserAlreadyExist,
        validateCredentials
    }
};
