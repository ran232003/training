const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Company = sequelize.define("company", {
  name: {
    type: Sequelize.STRING,
  },
  employeeCount: {
    type: Sequelize.INTEGER,
  },
  location: {
    type: Sequelize.STRING,
  },
});
module.exports = Company;
