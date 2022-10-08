
const mongoose = require("mongoose");

const assignClassSchema = new mongoose.Schema(
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
        type: String,
        required: true,
      },
      assign_substition:{
        type:String,
        required: true,
        
       },
       file:{
        type: String,
       
      },
        lecture: {
        type: Array,
        required: true,
      },
      course: {
        type: Array,
        required: true,
      },
      semester: {
        type: Array,
        required: true,
      },
      select_time:{
        type:String,
        required:true,
      }
    
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const AssignClass = mongoose.model("assignclass", assignClassSchema);
module.exports = AssignClass;
