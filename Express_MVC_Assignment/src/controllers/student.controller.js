

const express = require("express");
const app = express();

const Student = require("../models/students.models")
const Submission = require("../models/submission.models")

// Student CRUD
app.get("/", async (req, res) => {
    try {
      const student = await Student.find().lean().exec();
  
      return res.status(200).send({ student: student });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.get("/", async (req, res) => {
    try {
      const student = await Submission.findById(req.params.id).lean().exec();
  
      return res.status(200).send(student);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = app;