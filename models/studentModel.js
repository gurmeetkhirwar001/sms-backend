const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    student_name: {
      type: String,
      required: true,
    },
    student_id: {
      type: Number,
      required: true,
      unique: true,
    },
    student_course:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
    student_class:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
      required: true,
    },
    student_course: {
      type: String,
      required: true,
    },
    student_semester: {
      type: String,
      required: true,
    },
    student_class: {
      type: String,
      required: true,
    },
    student_contact_number: {
      type: Number,
      required: true,
    },
    student_email: {
      type: String,
      required: true,
      unique: true,
    },
    student_home_address: {
      type: String,
      required: true,
    },
    student_city: {
      type: String,
      required: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    father_email: {
      type: String,
      required: true,
    },
    father_contact_number: {
      type: Number,
      required: true,
    },
    father_city: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
