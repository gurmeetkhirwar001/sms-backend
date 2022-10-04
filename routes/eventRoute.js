
const express = require("express");
const {createEvent,
    getEvent,
    updateEvent,
    getSingleEvent,
    deleteEvent
  
} = require("../controllers/event.controller");

const router = express.Router();

router.post("/create-event",createEvent, );
router.get("/get-event", getEvent);
router.get("/get-single-event/:id", getSingleEvent);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);
module.exports = router;
