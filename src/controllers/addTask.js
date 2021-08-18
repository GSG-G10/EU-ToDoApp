const { addTaskQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  console.log(req.body);
  const { taskName, dueTime, taskDetails } = req.body;
  addTaskQuery(taskName, dueTime, taskDetails)
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
