const mongoose = require("mongoose");
const semesterSchema = new mongoose.Schema(
  {
   

    student_semester:{
        type:String,
        enum:["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eight"]
    },

    course_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "course",
        reuired: true
    }
    
  
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);
const Semester = mongoose.model("semester", semesterSchema );
module.exports = Semester;