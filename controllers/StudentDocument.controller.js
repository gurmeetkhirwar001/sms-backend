const Document = require("../models/Document.model");
const responseHandler = require("../helpers/responseHandler");
// API to create Enquiry


// API to get all the Enquiry
const getstudentDocument = async (req, res, next) => {
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

//API to get single Enquiry

const getstudentSingleDocument = async (req, res, next) => {
  try {
    const document = await Document.findOne({ _id: req.params.id });
    
    if (document) {
      return res.status(200).send(document);
    } else {
      res.status(404).send({ message: " ContactEnquiry not found..!" });
    }
    responseHandler.data(res, document, 200);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to update the  document


module.exports = {

    getstudentDocument,
  getstudentSingleDocument,
  
};
