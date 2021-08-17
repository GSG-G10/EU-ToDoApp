const { clientError, serverError } = require('./error');
module.exports = {
    getTask : require('./getTask'),
    clientError : clientError,
    serverError : serverError
}
