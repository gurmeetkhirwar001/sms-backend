const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");

router.post("/create-user", UserController.UserCreation);
router.post("/login", UserController.UserLogin);
router.get("/getlogin", UserController.getLogin,);
router.get("/get-users", UserController.getAllUsers);
router.get("/get-single-users/:id", UserController.getSingleUser);
router.delete("/delete-user/:id", UserController.UserDelete);
router.patch("/update-user/:id", UserController.UserUpdate);

module.exports = router;
