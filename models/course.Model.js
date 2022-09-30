const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },

 student_course: {
        type: String,
        enum: ["B-tech,MBA,BA"],
      },
},
  
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
