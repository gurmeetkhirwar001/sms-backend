const Event = require("../models/event.model");
const responseHandler = require("../helpers/responseHandler");
// API to create Enquiry


// API to get all the Enquiry
const getEvent = async (req, res, next) => {
  try {
    const event = await Event.find()

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

//API to get single Enquiry

const getSingleEvent = async (req, res, next) => {
  try {
    const event = await Event.findOne({ _id: req.params.id });
    
    if (event) {
      return res.status(200).send(event);
    } else {
      res.status(404).send({ message: " Event not found..!" });
    }
    responseHandler.data(res, event, 200);
  } catch (error) {
    next("error:", error.message);
  }
};



module.exports = {

    getEvent,
  
    getSingleEvent,
   
 
};
