const connection = require('../config/connection');
// we have one user
// if complete or not
module.exports = (complete) => connection.query(
  'UPDATE tasks SET completed = $1 WHERE id = \'1\'', [complete],
);
