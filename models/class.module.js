const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
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

const Course = mongoose.model("class", courseSchema);
module.exports = Course;