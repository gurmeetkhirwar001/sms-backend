
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    Annual_function: {
      type: String,
      
      required: true,
    },
    
      Public_event:{
        type:String,
     
      required: true,
      },
      Select_Data: {
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
