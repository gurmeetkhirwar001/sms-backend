const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  user_email: {
    require: true,
    type: String,
  },
  user_password: {
    require: true,
    type: String,
  },
  user_type: {
    type: String,
    enum: ["super_admin", "teacher", "student"],
  },
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (this.user_password) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.user_password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.user_password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
