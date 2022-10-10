const Document = require("../models/Document.model");
const responseHandler = require("../helpers/responseHandler");
const { s3Upload } = require("../Utils/S3");
// API to create document
const createdocument = async (req, res, next) => {
  
  try {
    const upload =await  s3Upload(req.file);
      
        req.body.file = upload.link;
    const document = await Document.create(req.body);
    responseHandler.data(res, document, 200);
  } catch (error) {
    console.log("error:", error.message);
  }
};

// API to get all the document
const getDocument = async (req, res, next) => {
  try {
    const document = await Document.find()

    if (document) {
      return res.status(200).send(document);
    } else {
      res.status(404).send({ message: "Document not found..!" });
    }
    responseHandler.data(res, document, 200);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to get single Document

const getSingleDocument = async (req, res, next) => {
  try {
    const document = await Document.findOne({ _id: req.params.id });
    
    if (document) {
      return res.status(200).send(document);
    } else {
      res.status(404).send({ message: " document not found..!" });
    }
    responseHandler.data(res, document, 200);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to update the  document
const updateDocument = async (req, res, next) => {
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
      res.status(404).send({ message: "Update Document failed...!" });
    }
    responseHandler.data(res, document, 200);
  } catch (error) {
    next("message", error.message);
  }
};

// API to delete the Document
const DeleteDocument = async (req, res, next) => {
  try {
   
    const document = await Document.deleteOne({ _id: req.params.id });
    if (document) {
      return res
        .status(200)
        .send({ message: "Document deleted successfully..!" });
    } else {
      res.status(404).send({ message: "Delete operation failed...!" });
    }
    responseHandler.data(res, document, 200);
  } catch (error) {
    next("message", error.message);
  }
};

module.exports = {
    createdocument,
    getDocument,
  getSingleDocument,
  DeleteDocument ,
  updateDocument
};
