const express = require("express");
const {
  
  getTeacher_Attendance,
  getSingleTeacher_Attendance,
  
} = require("../controllers/teacher-attendance-student");

const router = express.Router();


router.get("/get-teacher_attendance", getTeacher_Attendance);
router.get("/get-single-teacher_attendance/:id", getSingleTeacher_Attendance);

module.exports = router;
