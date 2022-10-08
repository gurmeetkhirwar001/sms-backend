const express = require("express");
const multer = require("multer");
const { registerTeacher, findTeacher, getSingleTeacher, updateTeacher, deleteTeacher }
 = require("../controllers/teacherController");

const router = express.Router();

router.post("/create-teacher",multer().single('file'), registerTeacher);
router.get("/get-teacher", findTeacher);
router.get("/get-teacher/:id", getSingleTeacher);
router.put("/update-teacher/:id", updateTeacher);
router.delete("/delete-teacher/:id", deleteTeacher);

module.exports = router;
