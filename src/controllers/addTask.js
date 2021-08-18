const { addTaskQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  console.log(req.body);
  const { title, dueTime, taskDetails } = req.body;
  addTaskQuery(title, taskDetails, dueTime)
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
