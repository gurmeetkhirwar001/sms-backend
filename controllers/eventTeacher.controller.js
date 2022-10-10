const  Event = require("../models/event.model");
const responseHandler = require("../helpers/responseHandler");
const {s3Upload} = require("../Utils/S3")



//api to register event;
const registerTeacherEvent = async (req, res, next) => {
  try {
    const upload = await s3Upload(req.file)
    req.body.file = upload.link;
    const event = await Event.create(req.body);
    responseHandler.data(res, event, 200);
  } catch (error) {
    next("error:", error.message);
  }
};
// api to get all event
const getAllTeacherEvent = async (req, res, next) => {
  try {
    const event = await Event.find().lean().exec();
    if (event) {
      return res.status(200).send(event);
      
    } else {
      res.status(404).send({ message: "Event not found..!" });
    }
    responseHandler.data(res, event, 200);
  } catch (error) {
    next("error:", error.message);
  }
};
//api to get single event
const getSingleTeacherEvent = async (req, res, next) => {
  try {
    const event = await Event.findOne({ id: req.params.id });
    if (event) {
      // responseHandler.data(res, event, 200);
      return res.status(200).send(event);
    } else {
      res.status(404).send({ message: "Event not found" });
    }
    responseHandler.data(res, event, 200);
  } catch (error) {
    next("error:", error.message);
  }
};
//api to update the event
const updateTeacherEvent  = async (req, res, next) => {
  try {
    const event = await Event.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    if (event) {
      return res
        .status(200)
        .send({ message: "Event updated successfully..!" });
    } else {
      res.status(404).send({ message: "Update operation failed...!" });
    }
    // res.send(attendance);
    responseHandler.data(res, event, 200);
  } catch (error) {
    next("message", error.message);
  }
};
const deleteTeacherEvent = async (req, res, next) => {
  try {
    const event = await Event.deleteOne({ id: req.params.id });
    responseHandler.data(res, event, 200);
    // return res.status(200).send(event);
  } catch (error) {
    next("error:", error.message);
  }
};
module.exports = {
  registerTeacherEvent,
  getAllTeacherEvent,
  getSingleTeacherEvent,
  updateTeacherEvent,
  deleteTeacherEvent,
};