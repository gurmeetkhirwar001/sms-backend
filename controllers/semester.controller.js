const Semester = require("../models/semester.model");
const responseHandler = require("../helpers/responseHandler");


const registerSemester = async (req, res, next) => {
    try {
      const semester = await Semester.create(req.body);
        // return res.status(200).send(studentAttendance);
      responseHandler.data(res, semester, 200);
    } catch (error) {
      next(error.message);
    }
  };



  module.exports = {
    registerSemester
    
  }  