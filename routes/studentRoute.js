const express = require("express");
const multer = require("multer");
const {
  registerStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = express.Router();

//  router.get("/check", (req,res)=>{
//     res.send("router is working properly...")
//  });

router.post("/create-student",multer().single('file'), registerStudent);
router.get("/get-student", getAllStudent);
router.get("/get-single-student/:id", getSingleStudent);
router.put("/update-student/:id", updateStudent);
router.delete("/delete-student/:id", deleteStudent);
module.exports = router;
