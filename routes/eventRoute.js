const express = require("express");
const {
  registerEvent,
  getAllEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");
const router = express.Router();
router.post("/create-event", registerEvent);
router.get("/get-event", getAllEvent);
router.get("/get-single-event/:id", getSingleEvent);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);
module.exports = router;
