const express = require("express");
const {
  registerEvent,
  getAllEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event.controller");
const multer = require("multer")
const router = express.Router();

router.post("/create-event", multer().single('file'),registerEvent);
router.get("/get-event", getAllEvent);
router.get("/get-single-event/:id", getSingleEvent);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);
module.exports = router;
