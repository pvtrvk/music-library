class UserError extends Error {
    constructor (res, { message, statusCode, action, futureUrl }) {
        super();
        this.assignToThis(this, arguments[1]);
        this.takeAction(res);
    }
    assignToThis (self, values) {
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                self[key] = values[key];
            }
        }
    }
    takeAction(res) {
        res.status(this.statusCode);
        switch (this.action) {
            case 'redirect':
                res.redirect(this.futureUrl);
                break;
            case 'render':
                res.render(this.futureUrl);
                break;
            default:
                res.render('error/index');
                break;
        }
    }
}

module.exports = UserError;
