const Ajv = require("ajv").default;
const path = require("path");
const Job = require("../models/jobs-schema");
const Weather = require("../models/weather-schema");
const schema_user = require("../schema/jsonSchema.json");
const schema_job = require("../schema/jobsSchema.json");
const fs = require("fs");

const weatherSchema = require("../schema/weatherSchema.json");
const ajv = new Ajv();
//const validate_user = ajv.compile(schema_user);
const mongoAddingDocs = async (req, res, next) => {
  try {
    const validate_schema = ajv.compile(schema_job);
    if (!validate_schema(req.body)) {
      return res.json({ status: "fail" });
    }

    const job = new Job(req.body);
    let dbRes = await job.save();
    return res.json({ status: "ok", job: job, dbRes: dbRes });
  } catch (error) {
    return res.json({ status: "fail" });
  }
};
const mongoUpateArray = async (req, res, next) => {
  //["amdocs","court","mail"] add, remove, update
  //1. change in array of string, amdoxs to amdocs next
  // const job = await Job.updateOne(
  //   { _id: "64ba9a4f65b87c9cccc9dac7", jobs: "amdocs" },
  //   { $set: { "jobs.$": "amdocs next" } }
  // );
  //2. adding to jobs array
  // const job = await Job.updateOne(
  //   { _id: "64ba9a4f65b87c9cccc9dac7" },
  //   { $push: { jobs: "developer" } }
  // );
  //3. remove from jobs array
  // const job = await Job.updateOne(
  //   { _id: "64ba9a4f65b87c9cccc9dac7" },
  //   { $pull: { jobs: "developer" } }
  // );

  //4. updating objects inside array
  //array of objects: "roles":[{"name":"keeper","years":"7"},{"name":"sender","years":"12"}]
  //update name keeper to keeper2
  // const job = await Job.updateOne(
  //   { _id: "64ba9a4f65b87c9cccc9dac7", "roles.name": "keeper" },
  //   { $set: { "roles.$.name": "keeper2" } }
  // );
  //remove object from array when inside object name === keeper2
  // const job = await Job.updateOne(
  //   { _id: "64ba9a4f65b87c9cccc9dac7" },
  //   { $pull: { roles: { name: "keeper2" } } }
  // );

  const job = await Job.updateOne(
    { _id: "64ba9a4f65b87c9cccc9dac7" },
    { $push: { roles: { name: "keeper2", years: 123 } } }
  );
  console.log(job);
  return res.json({ status: "ok", job });
};
const validateSchema = async (req, res, next) => {
  const validate_user = ajv.compile(schema_user);
  console.log(req.body);
  console.log(validate_user(req.body), "here");
  if (validate_user(req.body)) {
    return res.json({ status: "ok" });
  }
  return res.json({ status: "fail" });
};
const addFavorite = async (req, res, next) => {
  const validate_user = ajv.compile(weatherSchema);
  console.log(validate_user(req.body), "here");
  if (!validate_user(req.body)) {
    console.log(validate_user.errors);
    return res.json({ status: "fail" });
  }
  const weather = new Weather(req.body);
  await weather.save();
  console.log(weather);
  return res.json({ status: "ok" });
};
const getFavorites = async (req, res, next) => {
  try {
    let favorites = await Weather.find();
    let faveMap = {};
    favorites.map((item) => {
      faveMap[item.Key] = item;
    });
    console.log(faveMap);
    return res.json({ status: "ok", favorites: faveMap });
  } catch (error) {
    return res.json({ status: "fail" });
  }
};
const removeFavorites = async (req, res, next) => {
  try {
    let key = req.params.key;
    let favorites = await Weather.deleteOne({ Key: key });

    console.log(favorites);
    return res.json({ status: "ok", favorites: favorites });
  } catch (error) {
    return res.json({ status: "fail" });
  }
};
const uploadFile = async (req, res, next) => {
  try {
    console.log(req.files, req.file, "files");
    return res.json({ status: "ok" });
  } catch (error) {
    return res.json({ status: "fail" });
  }
};
const getFilesNames = async (req, res, next) => {
  try {
    const files = [];
    // const folderPath = path.join(__dirname, "controllers"); // Replace 'myfolder' with your folder name
    //console.log(folderPath, "downloadFile");

    fs.readdirSync("./uploads/files").forEach((file) => {
      console.log(file);
      files.push(file);
    });
    return res.json({ status: "ok", files });
  } catch (error) {
    return res.json({ status: "fail" });
  }
};
const downloadFile = async (req, res, next) => {
  console.log("download files", req.params);

  try {
    let fileName = req.params.fileName;
    let filePath = "./uploads/files/" + fileName;
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).send("File not found");
      }

      // Set the appropriate headers for download
      res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
      res.setHeader("Content-Type", "application/octet-stream");

      // Stream the file to the response
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res); // This pipes the content of the file to the response stream
    });
    // return res.json({ status: "ok" });
  } catch (error) {
    return res.json({ status: "fail" });
  }
};
module.exports = {
  validateSchema,
  removeFavorites,
  getFavorites,
  addFavorite,
  mongoAddingDocs,
  mongoUpateArray,
  uploadFile,
  getFilesNames,
  downloadFile,
};
