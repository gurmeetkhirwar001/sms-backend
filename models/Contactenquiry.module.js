const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    student_id: {
      type: Number,
      required: true,
      unique: true,
    },
    student_name: {
      type: String,
      
      required: true,
    },
 
   
    student_contact_number: {
      type: Number,
      required: true,
    },
    student_email: {
      type: String,
      required: true,
      unique: true,
    },
    description:{
      type: String,
      required: true,
    }
  
    
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

const Enquiry = mongoose.model("enquiry", enquirySchema);
module.exports = Enquiry;
