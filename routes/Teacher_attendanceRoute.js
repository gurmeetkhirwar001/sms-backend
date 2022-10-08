const express = require("express");
const {
  
  getTeacher_Attendance,
  getSingleTeacher_Attendance,
  
} = require("../controllers/teacher-student-attendance.controller");

const router = express.Router();


router.get("/get-teacher_attendance", getTeacher_Attendance);


module.exports = router;
