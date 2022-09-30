const mongoose = require("mongoose");

const teacherattendenceSchema = new mongoose.Schema(
  {
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
      required: true,
    },
    is_present: {
      type: Boolean,
      default: false,
    },
    attendence_time: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Teacher_Attendance = mongoose.model("teacherattendence", teacherattendenceSchema);
module.exports = Teacher_Attendance;
