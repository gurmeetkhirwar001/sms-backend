const Enquiry = require("../models/Contactenquiry.module");
const responseHandler = require("../helpers/responseHandler");
// API to create Enquiry
const createEnquiry = async (req, res, next) => {
  // res.send("attendance route is working...")
  try {
    const Contactenquiry = await Enquiry.create(req.body);
    responseHandler.data(res, Contactenquiry, 200);
  } catch (error) {
    console.log("error:", error.message);
  }
};

// API to get all the Enquiry
const getContactenquiry = async (req, res, next) => {
  try {
    const Contactenquiry = await Enquiry.find()

    if (Contactenquiry) {
      return res.status(200).send(Contactenquiry);
    } else {
      res.status(404).send({ message: "ContactEnquiry not found..!" });
    }
    responseHandler.data(res, Contactenquiry, 200);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to get single Enquiry

const getSingleEnquiry = async (req, res, next) => {
  try {
    const Contactenquiry = await Enquiry.findOne({ _id: req.params.id });
    
    if (Contactenquiry) {
      return res.status(200).send(Contactenquiry);
    } else {
      res.status(404).send({ message: " ContactEnquiry not found..!" });
    }
    responseHandler.data(res, Contactenquiry, 200);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to update the Enquiry
const updateenquiry = async (req, res, next) => {
  try {
    const Contactenquiry = await Enquiry.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    if (Contactenquiry) {
      return res
        .status(200)
        .send({ message: "ContactEnquiry updated successfully..!" });
    } else {
      res.status(404).send({ message: "Update ContactEnquiry failed...!" });
    }
    responseHandler.data(res, Contactenquiry, 200);
  } catch (error) {
    next("message", error.message);
  }
};

// API to delete the Enquiry
const deletenquiry = async (req, res, next) => {
  try {
    // console.log('req.params.id :', req.params.id )
    const Contactenquiry = await Enquiry.deleteOne({ _id: req.params.id });
    if (Contactenquiry) {
      return res
        .status(200)
        .send({ message: "ContactEnquiry deleted successfully..!" });
    } else {
      res.status(404).send({ message: "Delete operation failed...!" });
    }
    responseHandler.data(res, Contactenquiry, 200);
  } catch (error) {
    next("message", error.message);
  }
};

module.exports = {
    createEnquiry,
  getContactenquiry,
  getSingleEnquiry,
  deletenquiry,
  updateenquiry
};
