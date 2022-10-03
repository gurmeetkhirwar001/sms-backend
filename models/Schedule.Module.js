
const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema(
  {
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
      required: true,
    },
    
      course:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
      },
      class: {
        type: Array,
        required: true,
      },
    
        Enter_Title: {
        type: String,
        required: true,
      },
      course: {
        type: Array,
        required: true,
      },
      
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Schedule = mongoose.model("Schedule", ScheduleSchema);
module.exports = Schedule;
