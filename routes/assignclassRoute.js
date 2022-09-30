const express = require("express");
const {registerassign, findAssign, getSingleAssign, updateassign, 
    deleteassign } = require("../controllers/AssignClass.Controller");

const router = express.Router();

router.post("/create-assign", registerassign);
router.get("/get-assign", findAssign);
router.get("/get-assign/:id", getSingleAssign);
router.put("/update-assign/:id", updateassign);
router.delete("/delete-assign/:id", deleteassign);

module.exports = router;