const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
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
