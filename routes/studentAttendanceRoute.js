const express = require("express");
const {
  registerStudentAttendance,
  getAllStudentAttendance,
  getSingleStudentAttendance,
  updateStudentAttendance,
  deleteStudentAttendance,
} = require("../controllers/studentAttendance.controller");

const router = express.Router();

router.post("/create-student-attendance", registerStudentAttendance);
router.get("/get-student-attendance", getAllStudentAttendance);
router.get("/get-single-student-attendance/:id", getSingleStudentAttendance);
router.put("/update-student-attendance/:id", updateStudentAttendance);
router.delete("/delete-student-attendance/:id", deleteStudentAttendance);
module.exports = router;
