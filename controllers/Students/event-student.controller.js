const Event = require("../../models/event.model");
// const responseHandler = require("../helpers/responseHandler");
// API to create Enquiry
// const createEvent = async (req, res, next) => {
//   // res.send("attendance route is working...")
//   try {
//     const event = await Event.create(req.body);
//     responseHandler.data(res, event, 200);
//   } catch (error) {
//     console.log("error:", error.message);
//   }
// };

// API to get all the Enquiry
const getstudentEvent = async (req, res, next) => {
  try {
    const event = await Event.find().populate({
         path:"Event",select:["annual_function,Detail"]
    })
    // const event = await Event.find()
    if (event) {
      return res.status(200).send(event);
    } else {
      res.status(404).send({ message: "Event not found..!" });
    }
    res.send(event)
    // responseHandler.data(res, event, 200);
  } catch (error) {
    next("error:", error.message);
  }
};

//API to get single Enquiry

// const getSingleEvent = async (req, res, next) => {
//   try {
//     const event = await Event.findOne({ _id: req.params.id });
    
//     if (event) {
//       return res.status(200).send(event);
//     } else {
//       res.status(404).send({ message: " Event not found..!" });
//     }
//     responseHandler.data(res, event, 200);
//   } catch (error) {
//     next("error:", error.message);
//   }
// };

// //API to update the Enquiry
// const updateEvent = async (req, res, next) => {
//   try {
//     const event = await Event.updateOne(
//       { _id: req.params.id },
//       {
//         $set: req.body,
//       }
//     );
//     if (event) {
//       return res
//         .status(200)
//         .send({ message: "Event updated successfully..!" });
//     } else {
//       res.status(404).send({ message: "Update Event failed...!" });
//     }
//     responseHandler.data(res, event, 200);
//   } catch (error) {
//     next("message", error.message);
//   }
// };

// // API to delete the Enquiry
// const deleteEvent = async (req, res, next) => {
//   try {
    
//     const event = await Event.deleteOne({ _id: req.params.id });
//     if (event) {
//       return res
//         .status(200)
//         .send({ message: "Event deleted successfully..!" });
//     } else {
//       res.status(404).send({ message: "Delete operation failed...!" });
//     }
//     responseHandler.data(res, event, 200);
//   } catch (error) {
//     next("message", error.message);
//   }
// };

module.exports = {
    
    getstudentEvent
};
