const express = require("express");
const {
    registerTeacherEvent,
    getAllTeacherEvent,
    getSingleTeacherEvent,
    updateTeacherEvent,
    deleteTeacherEvent,
} = require("../controllers/eventTeacher.controller");
const multer = require("multer")
const router = express.Router();

router.post("/create-teacher-event", multer().single('file'),registerTeacherEvent);
router.get("/get-teacher-event", getAllTeacherEvent);
router.get("/get-single-teacher-event/:id", getSingleTeacherEvent);
router.put("/update-teacher-event/:id", updateTeacherEvent);
router.delete("/delete-teacher-event/:id", deleteTeacherEvent);
module.exports = router;