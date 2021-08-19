const connection = require('../config/connection');

module.exports = (taskName, dueTime) => connection.query(
  'INSERT INTO tasks (user_id,title, due_time) VALUES (1,$1,$2)', [taskName, dueTime],
);
