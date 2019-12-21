class UserError extends Error {
    constructor (res, { message, statusCode, action }) {
        super();
        this.assignToThis(this, arguments[1]);
    }
    assignToThis (self, values) {
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                self[key] = values[key];
            }
        }
    }
}

module.exports = UserError;
