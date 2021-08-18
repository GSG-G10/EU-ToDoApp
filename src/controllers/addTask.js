const { addTaskQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const { title, dueTime, taskDetails } = req.body;
  addTaskQuery(title, taskDetails, dueTime)
    .then(res.redirect('/home'))
    .catch((err) => {
      next(err);
    });
};
