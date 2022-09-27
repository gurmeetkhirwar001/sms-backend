const express = require("express");
const { registerAttendance, getAllAttendance, getSingleAttendance, updateAttendance, deleteAttendance } = require("../controllers/attendanceController");

const router = express.Router();

router.post("/create-attendance", registerAttendance);
router.get("/get-attendance", getAllAttendance);
router.get("/get-single-attendance/:id", getSingleAttendance);
router.put("/update-attendance/:id", updateAttendance);
router.delete("/delete-attendance/:id", deleteAttendance);
module.exports = router;
