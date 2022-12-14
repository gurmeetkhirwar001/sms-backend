const Attendance = require("../models/attendanceModel");

// API to create Attendance
const registerAttendance = async (req, res, next) => {
  // res.send("attendance route is working...")
  try {
    const attendance = await Attendance.create(req.body);
    res.send(attendance);
  } catch (error) {
    console.log("error:", error.message);
  }
};

// API to get all the Attendance
const getAllAttendance = async (req, res, next) => {
  try {
    const attendance = await Attendance.find().populate(
      "student_id",
      "student_name student_course"
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

// API to get single Attendance

const getSingleAttendance = async (req, res, next) => {
  try {
    const attendance = await Attendance.findOne({ _id: req.params.id });
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
const updateAttendance = async (req, res, next) => {
  try {
    const attendance = await Attendance.updateOne(
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
const deleteAttendance = async (req, res, next) => {
  try {
    // console.log('req.params.id :', req.params.id )
    const attendance = await Attendance.deleteOne({ _id: req.params.id });
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
  registerAttendance,
  getAllAttendance,
  getSingleAttendance,
  updateAttendance,
  deleteAttendance,
};
