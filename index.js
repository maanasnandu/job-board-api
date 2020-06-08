const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//Init app
const app = express();

//Conncet to MongoDB
mongoose.connect("mongodb://localhost/job-board");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//Init Routes
app.use("/api", require("./routes/api"));

//Error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ err: err.message });
});

app.listen(process.env.port || 4000, function () {
  console.log("Ready to accept");
});
