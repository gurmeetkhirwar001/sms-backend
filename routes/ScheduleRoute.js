const express = require("express");
const {
    registerSchedule, findSchedule, 
    getSingleSchedule, updateSchedule, deleteSchedule
  
} = require("../controllers/ScheduleController");

const router = express.Router();

router.post("/create-schedule", registerSchedule);
router.get("/get-schedule", findSchedule);
router.get("/get-single-schedule/:id", getSingleSchedule);
router.put("/update-schedule/:id", updateSchedule);
router.delete("/delete-schedule/:id", deleteSchedule);
module.exports = router;
