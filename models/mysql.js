var mysql = require('mysql');

module.exports = mysql.createPool({
  connectionLimit : 10,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'test'
});
