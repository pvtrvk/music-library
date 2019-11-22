const { isEmpty } = require('../helpers/dataParsers');

const areCredentialsValid = ({ login, passwd }) => {
    return !(isEmpty(login) || isEmpty(passwd));
};

module.exports = {
    areCredentialsValid
};
