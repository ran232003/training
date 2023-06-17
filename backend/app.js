const express = require("express");
const app = express();
const Ajv = require("ajv").default;

var csv = require("csvtojson");
const mainRouter = require("./routes/routes");
let { setRecords } = require("./listen");

const port = 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use("/main", mainRouter);
//setRecords(); check folder
//const path = "testFiles";

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
