const express = require("express");

const {
    Allclass,registerclass
} = require("../controllers/students_class.controller");




const router = express.Router();

router.post("/student_class",registerclass);
router.get("/get-student_class",Allclass);

module.exports = router;
