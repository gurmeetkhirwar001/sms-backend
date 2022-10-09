const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    // studentId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    //   },

    // class:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "class",
    //     required: true,
    //    },
    //    class: {
    //     type: String,
    //     required: true,
    //   },

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

     subject : {
      type: String,
      required: true,
     }
  },

  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;
