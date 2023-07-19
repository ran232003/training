const express = require("express");
const app = express();
const Ajv = require("ajv").default;
//const db = require("./util/db");
const sequelize = require("./util/db");
var csv = require("csvtojson");
const mainRouter = require("./routes/routes");
let { setRecords } = require("./listen");
let person = require("./models/person");
let company = require("./models/company");
// db.execute("select * from testtable")
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// const check = async () => {
//   const [res1, res2] = await db.execute("select * from testtable");
//   console.log("res", res1); // [ { col1: 'LK_7857' } ]
//   let data = res1[0];
//   console.log(data.col1); //LK_7857
// };
// check();

const port = 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
const Person = require("./models/person");
app.use(cors());
app.use("/main", mainRouter);
const createData = async () => {
  try {
    const res = await Person.create({ name: "ran3", age: 33, gender: "male" });
    console.log(res.name, "here"); //you can just tap to the keys from the result
  } catch (error) {
    console.log(error, "here");
  }
};
//setRecords(); check folder
//const path = "testFiles";
sequelize
  .sync()
  .then((res) => {
    //console.log(res);
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
createData();
