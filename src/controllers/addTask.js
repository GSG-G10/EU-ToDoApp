const { addTaskQuery } = require('../database/queries');

module.exports = (req, res) => {
  const { taskName, dueTime } = req.body;
  addTaskQuery(taskName, dueTime)
    // eslint-disable-next-line no-unused-vars
    .then((result) => res.redirect('/home'))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => res.redirect('/error'));
};
