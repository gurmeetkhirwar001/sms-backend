
const express = require("express");
const {
    createdocument,
    getDocument,
  getSingleDocument,
  DeleteDocument ,
  updateDocument
  
} = require("../controllers/Document.controller");

const router = express.Router();

router.post("/create-document",createdocument, );
router.get("/get-document", getDocument);
router.get("/get-single-document/:id", getSingleDocument);
router.put("/update-document/:id", updateDocument);
router.delete("/delete-document/:id", DeleteDocument);
module.exports = router;
