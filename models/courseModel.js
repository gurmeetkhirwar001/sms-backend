const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true,
      },
      student_course: {
        type: String,
        required: true,
      },
},{
    versionKey:false,
    timestamps:true
})

const Course = mongoose.model("course", courseSchema );
module.exports = Course;