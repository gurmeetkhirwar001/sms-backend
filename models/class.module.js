const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

 student_class: {
        type: String,
        enum: ["CSE-1,CSE-2"],
      },
},
  
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Class = mongoose.model("class", classSchema);
module.exports = Class;