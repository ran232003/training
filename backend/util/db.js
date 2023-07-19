const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "randb",
  password: "Ran232003@",
});

const Sequelize = require("sequelize");

const sequelize = new Sequelize("randb", "root", "Ran232003@", {
  dialect: "mysql",
  host: "localhost",
});
// module.exports = pool.promise();
module.exports = sequelize;
