const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    faculty_name: {
      type: String,
      required: true,
    },
    contact_number: {
      type: Number,
      required: true,
    },
    email_address: {
      type: String,
      required: true,
      unique: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    home_address: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    qualifications: {
      type: Array,
      required: true,
    },
    subjects: {
      type: Array,
      required: true,
    },
    course: {
      type: Array,
      required: true,
    },
    semester: {
      type: Array,
      required: true,
    },
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = Teacher;
