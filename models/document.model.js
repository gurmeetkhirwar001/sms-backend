const mongoose = require("mongoose");
const documentSchema = new mongoose.Schema(
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
        enter_title: {
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
      enter_description:{
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