const connection = require('../config/connection');

module.exports = (title, task_description, due_time) => connection.query(
  `UPDATE tasks SET title = '${title}', task_description = '${task_description}', due_time = '${due_time}' WHERE id = 1`,
);
