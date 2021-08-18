const { clientError, serverError } = require('./error');
const getTask = require('./getTask');
const addTask = require('./addTask');
const homePage = require('./home');

module.exports = {
  getTask,
  clientError,
  addTask,
  serverError,
  homePage,
};
