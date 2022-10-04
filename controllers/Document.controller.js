const Document = require("../models/Document.model");

// API to create Enquiry
const createdocument = async (req, res, next) => {
  // res.send("attendance route is working...")
  try {
    const document = await Document.create(req.body);
    res.send(document);
  } catch (error) {
    console.log("error:", error.message);
  }
};

// API to get all the Enquiry
const getDocument = async (req, res, next) => {
  try {
    const document = await Document.find()

    if (document) {
      return res.status(200).send(document);
    } else {
      res.status(404).send({ message: "Document not found..!" });
    }
    res.send(document);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to get single Enquiry

const getSingleDocument = async (req, res, next) => {
  try {
    const document = await Document.findOne({ _id: req.params.id });
    
    if (document) {
      return res.status(200).send(document);
    } else {
      res.status(404).send({ message: " ContactEnquiry not found..!" });
    }
    res.send(document);
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
    res.send(document);
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
    res.send(document);
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
