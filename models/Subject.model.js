const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    

    subject: {
      type: String,
      enum: [
        "machincal",
        "civil_engineering",
        "electronic",
        "Computer Science",
        "Computer Application",
        "Mathematics",
        "Physics",
        "Physics-2",
        "DBMS-II",
        "Chemistry",
        "DBMS",
      ],
      required: true,
    },

   
  },

  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;
