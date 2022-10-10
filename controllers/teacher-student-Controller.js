const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");

// API to create the student


// API to get all the students

const getAllteacherStudent = asyncHandler(async (req, res, next) => {
  try {
    const allStudents = await Student.find();
    if (allStudents) {
      return res.status(200).send(allStudents);
    } else {
      res.status(404).send({ message: "Student not found..." });
    }
  } catch (error) {
    next(error);
  }
});

// API to get single student

const getteacherSingleStudent = asyncHandler(async (req, res, next) => {
  try {
    const singleStudent = await Student.findOne({ _id: req.params.id });
    if (singleStudent) {
      return res.status(200).send(singleStudent);
    } else {
      res.status(404).send({ message: "Student not found..." });
    }
  } catch (error) {
    next("message", error.message);
  }
});


// API to update the student





module.exports = {
  
  getAllteacherStudent,
  getteacherSingleStudent,
 
};
