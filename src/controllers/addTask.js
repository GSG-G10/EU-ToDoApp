const { addTaskQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const { body } = req;
  const { task_name, due_time, task_details } = body;
  addTaskQuery(task_name, due_time, task_details)
    .then(() => {
      res.redirect('/admin/tasks');
    })
    .catch((err) => {
      next(err);
    });
};
// userId
