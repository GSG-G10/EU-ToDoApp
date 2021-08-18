const { clientError, serverError } = require('./error');
const getTask = require('./getTask');
const addTask = require('./addTask');
const updateTask = require('./updateTask');

module.exports = {
  getTask,
  clientError,
  addTask,
  serverError,
  updateTask,
};
