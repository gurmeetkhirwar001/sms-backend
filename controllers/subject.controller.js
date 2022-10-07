const Subject = require("../models/subject.model");
const responseHandler = require("../helpers/responseHandler");


const registerSubject = async (req, res, next) => {
    try {
      const subject = await Subject.create(req.body);
        // return res.status(200).send(studentAttendance);
      responseHandler.data(res, subject, 200);
    } catch (error) {
      next("error:", error.message);
    }
  };

const getAllSubject = async (req, res, next) => {
    try {
      const subject = await Subject.find().lean().exec()
      if (subject) {
        return res.status(200).send(subject);
       
      } else {
        res.status(404).send({ message: "Subject not found..!" });
      }
      // res.send(studentAttendance);
      responseHandler.data(res, subject, 200);
    } catch (error) {
      next("error:", error.message);
    }
  };

  module.exports = {
    registerSubject,
    getAllSubject
  };
  