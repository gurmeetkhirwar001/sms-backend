const express = require("express");
const multer = require("multer");
const {
  
  getAllteacherStudent,
  getteacherSingleStudent,
} = require("../controllers/teacher-student-Controller");
const router = express.Router();



router.get("/get-student", getAllteacherStudent);
router.get("/get-single-student/:id", getteacherSingleStudent);

module.exports = router;
