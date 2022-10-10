const Course = require("../models/course.Model");
const responseHandler = require("../helpers/responseHandler");


const registerCourse = async (req, res, next) => {
    try {
      const course = await Course.create(req.body);
        
      responseHandler.data(res, course, 200);
    } catch (error) {
      next( error.message);
    }
  };

const getAllCourse = async (req, res, next) => {
    try {
      const course = await Course.find().lean().exec()
      if (course) {
        return res.status(200).send(course);
       
      } else {
        res.status(404).send({ message: "Course not found..!" });
      }
     
      responseHandler.data(res, course, 200);
    } catch (error) {
      next("error:", error.message);
    }
  };
  const getSingleCourse = async (req, res, next) => {
    try {
      const course = await Course.findOne({ id: req.params.id });
      if (course) {
       
        return res.status(200).send(course);
      } else {
        res.status(404).send({ message: "Course not found" });
      }
     
      responseHandler.data(res, course, 200);
    } catch (error) {
      next("error:", error.message);
    }
  };


const updateCourse  = async (req, res, next) => {
  try {
    const course = await Course.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    if (course) {
      return res
        .status(200)
        .send({ message: "Course updated successfully..!" });
    } else {
      res.status(404).send({ message: "Update operation failed...!" });
    }
   
    responseHandler.data(res, course, 200);
  } catch (error) {
    next("message", error.message);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.deleteOne({ id: req.params.id });
    
    
      responseHandler.data(res, course, 200);
  } catch (error) {
    next("error:", error.message);
  }
};

  module.exports = {
    registerCourse,
    getAllCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse
  }  