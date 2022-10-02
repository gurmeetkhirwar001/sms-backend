const Enquiry = require("../models/Contactenquiry.module");

// API to create Attendance
const createEnquiry = async (req, res, next) => {
  // res.send("attendance route is working...")
  try {
    const Contactenquiry = await Enquiry.create(req.body);
    res.send(Contactenquiry);
  } catch (error) {
    console.log("error:", error.message);
  }
};

// API to get all the Attendance
const getContactenquiry = async (req, res, next) => {
  try {
    const Contactenquiry = await Enquiry.find()

    if (Contactenquiry) {
      return res.status(200).send(Contactenquiry);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    res.send(Contactenquiry);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to get single Attendance

const getSingleEnquiry = async (req, res, next) => {
  try {
    const Contactenquiry = await Enquiry.findOne({ _id: req.params.id });
    // .populate("student_id");
    if (Contactenquiry) {
      return res.status(200).send(Contactenquiry);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    res.send(Contactenquiry);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to update the Attendance
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
        .send({ message: "Attendance updated successfully..!" });
    } else {
      res.status(404).send({ message: "Update operation failed...!" });
    }
    res.send(Contactenquiry);
  } catch (error) {
    next("message", error.message);
  }
};

// API to delete the Attendance
const deletenquiry = async (req, res, next) => {
  try {
    // console.log('req.params.id :', req.params.id )
    const Contactenquiry = await Enquiry.deleteOne({ _id: req.params.id });
    if (Contactenquiry) {
      return res
        .status(200)
        .send({ message: "Attendance deleted successfully..!" });
    } else {
      res.status(404).send({ message: "Delete operation failed...!" });
    }
    res.send(Contactenquiry);
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
