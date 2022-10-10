const express = require("express");
const {
  registerTeacherDocument,
  getAllTeacherDocument,
  getSingleTeacherDocument,
  updateTeacherDocument,
  deleteTeacherDocument,
} = require("../controllers/documentTeacher.controller");
const router = express.Router();
const multer = require("multer")





router.post("/create-teacher-document", multer().single('file'),registerTeacherDocument);
router.get("/get-teacher-document", getAllTeacherDocument);
router.get("/get-single-teacher-document/:id", getSingleTeacherDocument);
router.put("/update-teacher-document/:id", updateTeacherDocument);
router.delete("/delete-teacher-document/:id", deleteTeacherDocument);
module.exports = router;
