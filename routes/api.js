const express = require("express");

const router = express.Router();

//Job Model
const Job = require("../models/job");

//Get All Jobs info from MongoDB
router.get("/jobs", function (req, res, next) {
  console.log("Fetching jobs");
  Job.find({})
    .then(function (jobs) {
      res.send(jobs);
    })
    .catch(next);
});

//Get one job info
router.get("/jobs/:id", function (req, res, next) {
  //console.log("Fetching jobs");
  Job.findOne({ _id: req.params.id })
    .then(function (jobs) {
      res.send(jobs);
    })
    .catch(next);
});

//Post to push new jobs to db
router.post("/jobs", function (req, res, next) {
  // console.log("Fetching jobs");
  Job.create(req.body)
    .then(function (job) {
      res.send(job);
    })
    .catch(next);
});

//update Job
router.put("/jobs/:id", function (req, res, next) {
  //console.log("Fetching jobs");
  Job.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Job.findOne({ _id: req.params.id }).then(function (job) {
        res.send(job);
      });
    })
    .catch(next);
});

//Delete job
router.delete("/jobs/:id", function (req, res, next) {
  //console.log("Fetching jobs");
  Job.findByIdAndRemove({ _id: req.params.id })
    .then(function (job) {
      res.send(job);
    })
    .catch(next);
});

module.exports = router;
