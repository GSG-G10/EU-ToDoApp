const { clientError, serverError } = require('./error');
const getTask = require('./getTask');
const addTask = require('./addTask');

module.exports = {
  getTask,
  clientError,
  addTask,
  serverError,
};
