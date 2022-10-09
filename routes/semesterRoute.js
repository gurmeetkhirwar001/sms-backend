const express = require("express");
const{
  registerSemester,
} = require("../controllers/semester.controller");

const router = express.Router();

router.post("/create-semester", registerSemester);

module.exports = router;
