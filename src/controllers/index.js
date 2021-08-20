const { clientError, serverError } = require('./error');
const getTask = require('./getTask');
const addTask = require('./addTask');
const homePage = require('./home');
const deleteTask = require('./deleteTask');

module.exports = {
  getTask,
  clientError,
  addTask,
  serverError,
  homePage,
  deleteTask,
};
