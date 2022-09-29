const User = require("../models/userModel");
const { UserRegistration } = require("../validator/userValidator");
const responseHandler = require("../helpers/responseHandler");
const bcryptjs = require("bcryptjs");
const { createNewToken } = require("../helpers/jwt");


const UserCreation = async (req, res, next) => {
  try {
    const { user_email, user_password, user_type } =
      await UserRegistration().validate(req.body);

    const UserData = await User.findOne({ email: user_email });
    // console.log(UserData);
    if (UserData) {
      throw new Error("User with this email already Exist.");
    } else {
      const UserSave = new User(req.body);

      const user = await UserSave.save();

      responseHandler.data(res, user, 200);
    }
  } catch (e) {
    next(e);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    if (user) {
      responseHandler.data(res, user, 200);
    } else {
      res.status(404).send({ message: "User not found..!" });
    }
  } catch (error) {
    next(error);
  }
};

// API to get single student

const getSingleUser = async (req, res, next) => {
  try {
    const singleUser = await User.findOne({ _id: req.params.id });
    if (singleUser) {
      return res.status(200).send(singleUser);
    } else {
      res.status(404).send({ message: "User not found..." });
    }
  } catch (error) {
    next("message", error.message);
  }
};


const UserLogin = async (req, res, next) => {
  try {
    const UserData = await User.findOne({ email: req.body.user_email });

    if (UserData) {
      const PasswordMatch = await bcryptjs.compare(
        req.body.user_password,
        UserData.password
      );
      if (PasswordMatch) {
        const token = createNewToken(UserData);
        // console.log(token, "token");
        responseHandler.data(res, token, 200);
      } else {
        throw new Error("Password Doesn't match");
      }
    } else {
      throw new Error("No User Found!");
    }
  } catch (e) {
    next(e);
  }
};
 
const UserUpdate = async (req, res, next) => {
  try {
    const UpdateUser = await User.updateOne(
      { _id: req.body.id },
      { ...req.body }
    );
    responseHandler.success(res, "User Updated Successfully", 200);
  } catch (e) {
    next(e);
  }
};

const UserDelete = async (req, res, next) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    responseHandler.success(res, "User Deleted Successfully", 200);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  UserCreation,
  getAllUsers,
  getSingleUser,
  UserLogin,
  UserUpdate,
  UserDelete,
};
