
const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
   
    
      subject_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject",
      },
      
      class: {
        type: String,
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
      semester: {
        type: Array,
        required: true,
      },
     semester_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "semester",
    },
      Enter_Description:{
        type:String,
        required:true,
      },
      file:{
        type:String,
        required:true,
      }
    
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Document = mongoose.model("Document", documentSchema);
module.exports = Document;
