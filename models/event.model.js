const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    event_name: {
      type: String,
      required: true,
    },
    event_type: {
        type: String,
        required: true,
      },
    select_date: {
      type: String,
      required: true,
    },
    select_time: {
        type: String,
        required: true,
    },
   
    details:{
        type: String,
        required: true,
    },
    file:{
      type:String,
    }
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);
const Event = mongoose.model("event", eventSchema);
module.exports = Event;