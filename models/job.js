const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Job schema
const JobSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  description: {
    type: String,
    required: [true, "Description field is required"],
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

const Job = mongoose.model("jobs", JobSchema);

module.exports = Job;
