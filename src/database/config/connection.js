const { Pool } = require('pg');

let DB_URL = '';
switch (process.env.NODE_ENV) {
  case process.env.NODE_ENV === 'test':
    DB_URL = process.env.TEST_DB_URL;
    break;
  case process.env.NODE_ENV === 'production':
    DB_URL = process.env.DB_URL;
    break;
  default: throw new Error('No Database URL!');
}
module.exports = new Pool({
  connectionString: DB_URL,
  ssl: false,
});
