// const { response } = require("express");
const  Event = require("../models/event.model");
const responseHandler = require("../helpers/responseHandler");
const {s3Upload} = require("../utils/s3")
//api to register event;
const registerEvent = async (req, res, next) => {
  try {
    const upload = await s3Upload(req.file)
    console.log(upload)
    // const event = await Event.create(req.body);
    // // return res.status(200).send(event);
    // responseHandler.data(res, event, 200);
  } catch (error) {
    next("error:", error.message);
  }
};
// api to get all event
const getAllEvent = async (req, res, next) => {
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
const getSingleEvent = async (req, res, next) => {
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
const updateEvent = async (req, res, next) => {
  try {
    const event = await Event.updateOne(
      { id: req.params.id },
      { $set: req.body }
    );
    // responseHandler.success(res, event, 200);
    return res.status(200).send(event);
  } catch (error) {
    next("error:", error.message);
  }
};
const deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.deleteOne({ id: req.params.id });
    // responseHandler.success(res, event, 200);
    return res.status(200).send(event);
  } catch (error) {
    next("error:", error.message);
  }
};
module.exports = {
  registerEvent,
  getAllEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};













