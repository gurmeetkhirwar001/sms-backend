const mongoose = require("mongoose");
const subjectSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    subject:{
        type:String,
        enum:["Computer Science", "Computer Application", "Mathematics", "Physics", "Physics-2" ]
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
const Subject = mongoose.model("subjectSchema", subjectSchema );
module.exports = Subject;