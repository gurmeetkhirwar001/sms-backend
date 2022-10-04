const express = require("express");
const {
  registerDocument,
  getAllDocument,
  getSingleDocument,
  updateDocument,
  deleteDocument,
} = require("../controllers/document.controller");
const router = express.Router();
// const { s3Upload } = require("../utils/s3")




router.post("/create-document",registerDocument);
router.get("/get-document", getAllDocument);
router.get("/get-single-document/:id", getSingleDocument);
router.put("/update-document/:id", updateDocument);
router.delete("/delete-document/:id", deleteDocument);
module.exports = router;


// s3Upload.apply.single('file').