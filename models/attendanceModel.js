const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "subject",
    },
   

    semester_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "semester",
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

const Attendance = mongoose.model("attendence", attendenceSchema);
module.exports = Attendance;
