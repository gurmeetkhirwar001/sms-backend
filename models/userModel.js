const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      enum: ["super_admin", "teacher", "student"],
    },
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

// UserSchema.pre("save", function (next) {
//   const user = this;

//   if (this.user_password) {
//     bcrypt.genSalt(10, function (saltError, salt) {
//       if (saltError) {
//         return next(saltError);
//       } else {
//         bcrypt.hash(user.user_password, salt, function (hashError, hash) {
//           if (hashError) {
//             return next(hashError);
//           }

//           user.user_password = hash;
//           next();
//         });
//       }
//     });
//   } else {
//     return next();
//   }
// });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
