const express = require("express");
const multer = require("multer");
const { studentAssign,getSingleAssign
     } = require("../controllers/AssignClass-student.Controller");

const router = express.Router();


router.get("/get-allassign", studentAssign);
router.get("/get-assign/:id", getSingleAssign);


module.exports = router;