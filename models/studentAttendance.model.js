const mongoose = require("mongoose");
const studentAttendanceSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },

    student_name : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    student_name : {
      type: String,   
      required: true,
    },
    student_course:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
    student_course:{
      type: Array,
      required: true,
    },
    student_class:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
      required: true,
    },
    student_class:{
      type: Array,
      required: true,
    },
    is_present: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);
const StudentAttendance = mongoose.model("studentAttendance", studentAttendanceSchema );
module.exports = StudentAttendance;