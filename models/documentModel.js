const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    document_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    s_no: {
        type: Number,
        required: true
    },
    select_course: {
        type: String,
        enum: ["B.Tech", "M.Tech", "MBA"],
    },
    select_class: {
        type: String,
        enum:["first", "second", "third", "fourth", "fifth"]

    },

    
    images: {
        type: String,
        required: true
    },
    
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Attendance = mongoose.model("attendence", attendenceSchema);
module.exports = Attendance;
