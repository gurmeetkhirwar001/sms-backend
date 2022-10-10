
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    Event_name: {
      type: String,
      
      required: true,
    },
    
      Event_type:{
        type:String,
     
      required: true,
      },
      Select_Date: {
        type: String,
        required: true,
      },
    
        Select_time: {
        type: String,
        required: true,
      },
      Detail:{
        type: String,
        required: true,
      },
      file:{
        type: String,
        required: true,
      }
      
      
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Event = mongoose.model("event", EventSchema);
module.exports = Event;
