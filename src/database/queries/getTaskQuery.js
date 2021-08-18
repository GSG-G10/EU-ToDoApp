const connection = require('../config/connection');

module.exports = () => connection.query(
  'SELECT * FROM tasks WHERE user_id=1',
);
