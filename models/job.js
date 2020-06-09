const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Job schema
const JobSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  typeOfJob: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: [true, "Description field is required"],
  },
  skills: {
    type: String,
    required: [true, "Skills field is required"],
  },
  sponsorship: {
    type: Boolean,
  },
  url: {
    type: String,
    required: [true, "URL field is required"],
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  companylogourl: {
    type: String,
  },
});

const Job = mongoose.model("jobs", JobSchema);

module.exports = Job;
