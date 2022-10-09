const express = require("express");
const {
  // registerAttendance,
  getDailyAttendance,
  getMonthlyAttendance,
  getSemesterWiseAttendance
  
} = require("../controllers/studentDailyAttendance.controller");

const router = express.Router();

// router.post("/create-attendance", registerAttendance);
router.get("/get-daily-attendance", getDailyAttendance);
router.get("/get-daily-monthly-attendance", getMonthlyAttendance);
router.get("/get-semester-attendance", getSemesterWiseAttendance);

module.exports = router;