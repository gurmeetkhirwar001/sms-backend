const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const router = require("../routes/studentRoute");

// API to create the student

const registerStudent = asyncHandler(async (req, res, next) => {
  try {
    const {
      student_name,
      student_id,
      student_course,
      student_semester,
      student_class,
      student_contact_number,
      student_email,
      student_home_address,
      student_city,
      father_name,
      father_email,
      father_contact_number,
      father_city,
    } = req.body;

    // const studentExists = await Student.findOne({ student_email });

    // if (studentExists) {
    //   res.status.send(400).send({ message: "student already exists with this email, Please try another one..!" });
    // }

    const student = await Student.create({
      student_name,
      student_id,
      student_course,
      student_semester,
      student_class,
      student_contact_number,
      student_email,
      student_home_address,
      student_city,
      father_name,
      father_email,
      father_contact_number,
      father_city,
    });

    if (student) {
      res.status(201).json({
        _id: student._id,
        student_name: student_name,
        student_id: student_id,
        student_course: student_course,
        student_semester: student_semester,
        student_class: student_class,
        student_contact_number: student_contact_number,
        student_email: student_email,
        student_home_address: student_home_address,
        student_city: student_city,
        father_name: father_name,
        father_email: father_email,
        father_contact_number: father_contact_number,
        father_city: father_city,
      });
    } else {
      res.status(401).send({ message: "Error occurd in finding student..!" });
    }
  } catch (error) {
    next(error);
  }
});

// API to get all the students

const getAllStudent = asyncHandler(async (req, res, next) => {
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

const getSingleStudent = asyncHandler(async (req, res, next) => {
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

const updateStudent = asyncHandler(async (req, res, next) => {
  try {
    const updateSingleStudent = await Student.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    if (updateSingleStudent) {
      return res
        .status(200)
        .send({ message: "Student updated successfully..!" });
    } else {
      res.status(404).send({ message: "Update operation failed...!" });
    }
    res.send(updateSingleStudent);
  } catch (error) {
    next("message", error.message);
  }
});

// API to delete the student

const deleteStudent = asyncHandler(async (req, res, next) => {
  try {
    // console.log('req.params.id :', req.params.id )
    const deleteSingleStudent = await Student.deleteOne({ _id: req.params.id });
    if (deleteSingleStudent) {
      return res
        .status(200)
        .send({ message: "Student deleted successfully..!" });
    } else {
      res.status(404).send({ message: "Delete operation failed...!" });
    }
    res.send(deleteSingleStudent);
  } catch (error) {
    next("message", error.message);
  }
});

module.exports = {
  registerStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
