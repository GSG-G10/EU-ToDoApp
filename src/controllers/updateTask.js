const { completeTask, updateTaskQuery } = require('../database/queries');
// if complete task update completetask other using getTaskQuery
module.exports = (req, res, next) => {
  const {
    complete, title, task_description, due_time,
  } = req.body;
  if (complete) {
    completeTask(complete, task_name, due_time, task_details)
      .then(() => {
        res.redirect('/admin/tasks');
      })
      .catch((err) => {
        next(err);
      });
  } else {
    updateTaskQuery(title, task_description, due_time)
      .then(() => {
        res.redirect('/admin/tasks');
      })
      .catch((err) => {
        next(err);
      });
  }
};
