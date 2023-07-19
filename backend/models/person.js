// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
// module.exports = Person;

const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Person = sequelize.define("person", {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  gender: {
    type: Sequelize.STRING,
  },
});
module.exports = Person;
