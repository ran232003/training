const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: String,
  jobs: [],
  roles: [],
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
