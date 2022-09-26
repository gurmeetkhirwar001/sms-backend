const UserModel = require("../models/userModel");
const { UserRegistration } = require("../validator/userValidator");
const responseHandler = require("../helpers/responseHandler");
const bcrypt = require("bcrypt");
const { createNewToken } = require("../helpers/jwt");

const UserCreation = async (req, res, next) => {
  try {
    const { user_email, user_password, user_type } =
      await UserRegistration().validate(req.body);

    const User = await UserModel.findOne({ user_email });
    if (User) {
      throw new Error("User with this email already Exist.");
    } else {
      const UserSave = new UserModel(req.body);

      const user = await UserSave.save();

      responseHandler.data(res, user, 200);
    }
  } catch (e) {
    next(e);
  }
};

const UserLogin = async (req, res, next) => {
  try {
    const User = await UserModel.findOne({ user_email });

    if (User) {
      const PasswordMatch = await bcrypt.compare(
        user_password,
        User.user_password
      );
      if (PasswordMatch) {
        const token = createNewToken(User);
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
    const UpdateUser = await UserModel.updateOne(
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
    await UserModel.deleteOne({ _id: req.params.id });
    responseHandler.success(res, "User Deleted Successfully", 200);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  UserCreation,
  UserLogin,
  UserUpdate,
  UserDelete,
};
