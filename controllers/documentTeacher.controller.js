const Document = require("../models/Document.model");
const responseHandler = require("../helpers/responseHandler");
const {s3Upload} = require("../Utils/S3")
//api to register document;
const registerTeacherDocument = async (req, res, next) => {
  try {
    const upload =await  s3Upload(req.file);
      
    req.body.file = upload.link;
const document = await Document.create(req.body);
responseHandler.data(res, document, 200);
    
  } catch (error) {
    next( error.message);
  }
};
// api to get all document
const getAllTeacherDocument = async (req, res, next) => {
  try {
    const document = await Document.find().lean().exec();
    if (document) {
      return res.status(200).send(document);
      // responseHandler.data(res, document, 200);
    } else {
      res.status(404).send({ message: "Document not found..!" });
    }
    responseHandler.data(res, document, 200);
  } catch (error) {
    next("error:", error.message);
  }
};
//api to get single document
const getSingleTeacherDocument = async (req, res, next) => {
  try {
    const document = await Document.findOne({ id: req.params.id });
    if (document) {
      // responseHandler.data(res, document, 200);
      return res.status(200).send(document);
    } else {
      res.status(404).send({ message: "Document not found" });
    }
    responseHandler.data(res, document, 200);
  } catch (error) {
    next(error.message);
  }
};
//api to update the document


const updateTeacherDocument  = async (req, res, next) => {
  try {
    const document = await Document.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    if (document) {
      return res
        .status(200)
        .send({ message: "Document updated successfully..!" });
    } else {
      res.status(404).send({ message: "Update operation failed...!" });
    }
    // res.send(attendance);
    responseHandler.data(res, document, 200);
  } catch (error) {
    next("message", error.message);
  }
};

const deleteTeacherDocument = async (req, res, next) => {
  try {
    const document = await Document.deleteOne({ id: req.params.id });
    // responseHandler.success(res, document, 200);
      // return res.status(200).send(document);
      responseHandler.data(res, document, 200);
  } catch (error) {
    next("error:", error.message);
  }
};
module.exports = {
  registerTeacherDocument,
  getAllTeacherDocument,
  getSingleTeacherDocument,
  updateTeacherDocument,
  deleteTeacherDocument,
};