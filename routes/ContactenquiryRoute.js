const express = require("express");
const multer = require("multer");
const {
   createEnquiry,
  getContactenquiry,
  getSingleEnquiry,
  updateenquiry,
  deletenquiry,
  
} = require("../controllers/Contactenquiry.controller");

const router = express.Router();

router.post("/create-enquiry",multer().single('file'), createEnquiry);
router.get("/get-enquiry", getContactenquiry);
router.get("/get-single-enquiry/:id", getSingleEnquiry);
router.put("/update-enquiry/:id", updateenquiry);
router.delete("/delete-enquiry/:id", deletenquiry);
module.exports = router;
