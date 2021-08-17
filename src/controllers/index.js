const { clientError, serverError } = require('./error');
const  {getTask} = require('./getTask');
module.exports = {
    getTask,
    clientError,
   serverError
}
