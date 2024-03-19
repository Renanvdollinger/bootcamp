const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'P@55word',
  database: 'robogarden',
});

module.exports = pool;