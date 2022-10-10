const express = require("express");
const {
  registerteacherAttendance,
  getAllteacherAttendance,
  getSingleteacherAttendance,
  updateteacherAttendance,
  deleteteacherAttendance,
} = require("../controllers/TeacherattendanceController");

const router = express.Router();

router.post("/create-teacher-attendance", registerteacherAttendance);
router.get("/get-teacher-attendance", getAllteacherAttendance);
router.get("/get-single-teacher-attendance/:id", getSingleteacherAttendance);
router.put("/update-teacher-attendance/:id", updateteacherAttendance);
router.delete("/delete-teacher-attendance/:id", deleteteacherAttendance);
module.exports = router;
