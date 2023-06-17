const chokidar = require("chokidar");
var csv = require("csvtojson");
var watcher = chokidar.watch("testFiles/*csv", {
  ignored: /^\./,
  persistent: true,
});
const setRecords = () => {
  console.log("start setRecords");
  watcher
    .on("add", function (path) {
      console.log("File", path, "has been added");
      csv()
        .fromFile(path)
        .then(function (jsonArrayObj) {
          //when parse finished, result will be emitted here.
          console.log(jsonArrayObj);
        });
    })
    .on("change", function (path) {
      console.log("File", path, "has been changed");
    })
    .on("unlink", function (path) {
      console.log("File", path, "has been removed");
    })
    .on("error", function (error) {
      console.error("Error happened", error);
    });
};
module.exports = {
  setRecords,
};
