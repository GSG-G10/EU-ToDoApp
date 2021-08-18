const connection = require('../config/connection');

module.exports = (userId) => connection.query(
  `SELECT id,completed,due_time,task_description, title, 
          due_time  FROM tasks WHERE user_id=${userId}`,
);
