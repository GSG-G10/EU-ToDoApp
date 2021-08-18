const connection = require('../config/connection');

module.exports = (title, task_description, completed, due_time) => connection.query(
  'INSERT INTO tasks (user_id, completed, due_time, title, task_description) VALUES ($1,$2,$3,$4,$5) where user_id= 1 ', [completed, due_time, title, task_description],
);
