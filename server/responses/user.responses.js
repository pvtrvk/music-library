const {BAD_REQUEST, OK} = require('http-status-codes');

const renderUserPage = ({login}, res) => {
    res.status(OK).render('user/index', {login});
};

const loginResponse = ({areCredentialsValid, username}, res, next) => {
    if (areCredentialsValid) {
        renderUserPage({username}, res);
    } else {
        res.status(BAD_REQUEST).redirect('/login?b=-1');
    }
};

module.exports = {
    loginResponse,
    renderUserPage
};
