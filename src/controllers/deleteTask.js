/* eslint-disable no-unused-vars */
const { deleteTaskQuery } = require('../database/queries');

module.exports = (req, res) => {
  const { id } = req.params;
  deleteTaskQuery(id)
    .then((result) => res.redirect('/home'))
    .catch((err) => res.redirect('/error'));
};
