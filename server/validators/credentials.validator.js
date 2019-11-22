const { isEmpty } = require('../helpers/dataParsers');

const isCredentialsStructureValid = ({ login, passwd }) => {
    return !(isEmpty(login) || isEmpty(passwd));
};

module.exports = {
    isCredentialsStructureValid
};
