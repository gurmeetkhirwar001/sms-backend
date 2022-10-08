const Teacher_Attendance = require("../models/Teacher-attendance.Model");
const responseHandler = require("../helpers/responseHandler");
// API to create Attendance
const registerTeacher_Attendance = async (req, res, next) => {
  // res.send("attendance route is working...")
  try {
    const attendance = await Teacher_Attendance.create(req.body);
    res.send(attendance);
  } catch (error) {
    console.log("error:", error.message);
  }
};

// API to get all the Attendance
const getAllTeacher_Attendance = async (req, res, next) => {
  try {
    const attendance = await Teacher_Attendance.find().populate(
        {
            
                path:"teacher_id",select:["faculty_name"]
              }
          
    );
    if (attendance) {
      return res.status(200).send(attendance);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    res.send(attendance);
  } catch (error) {
    next("error:", error.message);
  }
};

const getTeacher_Attendance = async (req, res, next) => {
  try {
    const attendance = await Teacher_Attendance.find().populate(
        {
            
                path:"teacher_id",select:["faculty_name"]
              }
          
    ).populate({
      path:"class",select:[""]
    })
    if (attendance) {
      return res.status(200).send(attendance);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    res.send(attendance);
  } catch (error) {
    next("error:", error.message);
  }
};

// API to get single Attendance

const getSingleTeacher_Attendance = async (req, res, next) => {
  try {
    const attendance = await Teacher_Attendance.findOne({ _id: req.params.id });
    // .populate("student_id");
    if (attendance) {
      return res.status(200).send(attendance);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    res.send(attendance);
  } catch (error) {
    next("error:", error.message);
  }
};

// API to update the Attendance
const updateTeacher_Attendance = async (req, res, next) => {
  try {
    const attendance = await Teacher_Attendance.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    if (attendance) {
      return res
        .status(200)
        .send({ message: "Attendance updated successfully..!" });
    } else {
      res.status(404).send({ message: "Update operation failed...!" });
    }
    res.send(attendance);
  } catch (error) {
    next("message", error.message);
  }
};

// API to delete the Attendance
const deleteTeacher_Attendance = async (req, res, next) => {
  try {
    // console.log('req.params.id :', req.params.id )
    const attendance = await Teacher_Attendance.deleteOne({ _id: req.params.id });
    if (attendance) {
      return res
        .status(200)
        .send({ message: "Attendance deleted successfully..!" });
    } else {
      res.status(404).send({ message: "Delete operation failed...!" });
    }
    res.send(attendance);
  } catch (error) {
    next("message", error.message);
  }
};

module.exports = {
  registerTeacher_Attendance,
  getAllTeacher_Attendance,
  getSingleTeacher_Attendance,
  updateTeacher_Attendance,
  deleteTeacher_Attendance,
};
