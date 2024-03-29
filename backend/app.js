const express = require("express");
const app = express();
const Ajv = require("ajv").default;
//const db = require("./util/db");
const sequelize = require("./util/db");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const { graphqlHTTP } = require("express-graphql");
var csv = require("csvtojson");
const mainRouter = require("./routes/routes");
let { setRecords } = require("./listen");
let person = require("./models/person");
let company = require("./models/company");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
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
const mongoose = require("mongoose");
const MyError = require("./models/MyError");
const { checkValidation } = require("./helperFunc");
app.use("/uploads/files", express.static(__dirname + "/uploads/files"));
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React app's domain
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));
// mongoose.connect(
//   "mongodb+srv://ranfa:232003@cluster0.d2yn9.mongodb.net/Weather?retryWrites=true&w=majority"
// );
mongoose.connect("mongodb://localhost:27017/training", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);
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
app.use((req, res, next) => {
  let error = new MyError("not able to find page");
  error.errorCode = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  //console.log(error);
  console.log("error controller", error.message);
  const errorCode = error.code || 500;
  const errorMsg = error.message || "unknown error occurd";
  res.status(errorCode);
  res.json({ status: "fail", msg: errorMsg });
});
sequelize
  .sync()
  .then((res) => {
    console.log("listening ", port);
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
//createData();
