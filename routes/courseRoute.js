const express = require("express");
const { getSingleAttendance } = require("../controllers/attendanceController");

const {
    registerCourse,
    getAllCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse,


} = require("../controllers/courseController");

const router = express.Router();

router.post("/create-course", registerCourse);
router.get('/get-course', getAllCourse);
router.get('/get-single-course/:id', getSingleCourse)
router.put('/update-course/:id', updateCourse)
router.delete('/delete-course/:id', deleteCourse)

module.exports = router;