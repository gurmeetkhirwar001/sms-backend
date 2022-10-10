const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    

      student_course: {
        type: String,
        enum: ["B.Tech", "MBA" , "BA", "M.Tech"],
      },
},
  
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
