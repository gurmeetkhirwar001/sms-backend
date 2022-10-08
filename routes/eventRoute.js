
const express = require("express");
const multer = require("multer");
const {
    getEvent,
      getSingleEvent,
    
  
} = require("../controllers/eventStudent.controller");

const router = express.Router();

router.get("/get-event", getEvent);
router.get("/get-single-event/:id", getSingleEvent);

module.exports = router;
