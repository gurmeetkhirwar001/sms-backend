const express = require("express");
const {
  registerSubject,
  getAllSubject,
 
} = require("../controllers/subject.controller");
const router = express.Router();



router.post("/create-subject", registerSubject);
router.get("/get-subject", getAllSubject);

module.exports = router;