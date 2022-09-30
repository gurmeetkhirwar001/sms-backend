const express = require("express");
const {
  registerTeacher_Attendance,
  getAllTeacher_Attendance,
  getSingleTeacher_Attendance,
  updateTeacher_Attendance,
  deleteTeacher_Attendance,
} = require("../controllers/teacher-attendance.controller");

const router = express.Router();

router.post("/create-teacher_attendance", registerTeacher_Attendance);
router.get("/get-teacher_attendance", getAllTeacher_Attendance);
router.get("/get-single-teacher_attendance/:id", getSingleTeacher_Attendance);
router.put("/update-teacher_attendance/:id", updateTeacher_Attendance);
router.delete("/delete-teacher_attendance/:id", deleteTeacher_Attendance);
module.exports = router;
