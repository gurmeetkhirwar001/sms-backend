
const express = require("express");
const multer = require("multer");
const {createEvent,
    getEvent,
    updateEvent,
    getSingleEvent,
    deleteEvent
  
} = require("../controllers/eventStudent.controller");

const router = express.Router();

router.post("/create-event",multer().single('file'),createEvent, );
router.get("/get-event", getEvent);
router.get("/get-single-event/:id", getSingleEvent);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);
module.exports = router;
