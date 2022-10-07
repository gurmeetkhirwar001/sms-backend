const express = require("express");

const {
    getstudentEvent
} = require("../../controllers/Students/event-student.controller");




const router = express.Router();

// router.post("/student_class",registerclass);
router.get("/get-student-event",getstudentEvent);

module.exports = router;
