const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },


 subject: {
        type: String,
        enum: ["machincal,computer_science,civil_engineering,electronic"],
      },
},
  
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;