const connection = require('../config/connection');

module.exports = (title, taskDescription, dueTime) => connection.query(
  'INSERT INTO tasks (user_id,due_time, title, task_description) VALUES (1,$1,$2,$3)', [dueTime, title, taskDescription],
);
