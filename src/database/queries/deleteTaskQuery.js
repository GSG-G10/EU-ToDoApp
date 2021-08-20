const connection = require('../config/connection');

module.exports = (id) => connection.query(`DELETE FROM tasks WHERE title = '${id}'`);
