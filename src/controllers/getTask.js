const { getTaskQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  getTaskQuery()
    .then((result) => res.json(result.rows))
    .catch(next);
};
