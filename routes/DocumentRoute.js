
const express = require("express");
const multer = require("multer");
const {
    
    getstudentDocument,
  getstudentSingleDocument,
 
  
} = require("../controllers/StudentDocument.controller");

const router = express.Router();


router.get("/get-document", getstudentDocument);
router.get("/get-single-document/:id", getstudentSingleDocument);

module.exports = router;
