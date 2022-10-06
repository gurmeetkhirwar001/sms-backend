// const { response } = require("express");
const Document = require("../models/document.model");
const responseHandler = require("../helpers/responseHandler");
const {s3Upload} = require("../utils/s3")
//api to register document;
const registerDocument = async (req, res, next) => {
  try {
    const upload = await s3Upload(req.file)
    console.log(upload);
    // const document = await Document.create(req.body);
    //   return res.status(200).send(document);
    // responseHandler.data((res, document, 200));
  } catch (error) {
    next("error:", error.message);
  }
};
// api to get all document
const getAllDocument = async (req, res, next) => {
  try {
    const document = await Document.find().lean().exec();
    if (document) {
      return res.status(200).send(document);
      // responseHandler.data(res, document, 200);
    } else {
      res.status(404).send({ message: "Document not found..!" });
    }
    res.send(document);
  } catch (error) {
    next("error:", error.message);
  }
};
//api to get single document
const getSingleDocument = async (req, res, next) => {
  try {
    const document = await Document.findOne({ id: req.params.id });
    if (document) {
      // responseHandler.data(res, document, 200);
      return res.status(200).send(document);
    } else {
      res.status(404).send({ message: "Document not found" });
    }
    res.send(document);
  } catch (error) {
    next("error:", error.message);
  }
};
//api to update the document
const updateDocument = async (req, res, next) => {
  try {
    const document = await Document.updateOne(
      { id: req.params.id },
      { $set: req.body }
    );
    // responseHandler.success(res, document, 200);
      return res.status(200).send(document);
  } catch (error) {
    next("error:", error.message);
  }
};
const deleteDocument = async (req, res, next) => {
  try {
    const document = await Document.deleteOne({ id: req.params.id });
    // responseHandler.success(res, document, 200);
      return res.status(200).send(document);
  } catch (error) {
    next("error:", error.message);
  }
};
module.exports = {
  registerDocument,
  getAllDocument,
  getSingleDocument,
  updateDocument,
  deleteDocument,
};