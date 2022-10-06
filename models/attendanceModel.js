const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
    student_course:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    student_class:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
    }
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Attendance = mongoose.model("attendence", attendenceSchema);
module.exports = Attendance;
