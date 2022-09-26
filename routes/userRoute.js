const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");

router.post("/create-user", UserController.UserCreation);
router.post("/login", UserController.UserLogin);
router.delete("/delete-user", UserController.UserDelete);
router.patch("/update-user", UserController.UserUpdate);

module.exports = router;
