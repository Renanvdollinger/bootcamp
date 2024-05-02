const mariadb = require('mariadb');

// const pool = mariadb.createPool({
//   host: 'localhost', //url to your hosting render.com
//   user: 'root',
//   password: 'P@55word',
//   database: 'robogarden',
// });

const pool = mariadb.createPool({
  host: 'dpg-copdlon79t8c73fstqrg-a',
  user: 'root',
  password: 'UgNgVeEKYNfNzmDdQaPhUZq5PkVLseK8',
  database: 'robogarden',
});

module.exports = pool;