const {BAD_REQUEST, OK} = require('http-status-codes');

const renderUserPage = ({login}, res) => {
    res.status(OK).render('user/index', {login});
}

const loginResponse = ({areCredentialsValid, login}, res, next) => {
    if (areCredentialsValid) {
        renderUserPage({login}, res);
    } else {

        res.status(BAD_REQUEST).redirect('/login?b=-1');
    }
};

module.exports = {
    loginResponse,
    renderUserPage
};
