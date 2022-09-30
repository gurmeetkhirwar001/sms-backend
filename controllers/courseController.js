const { response } = require("express");
const Course = require("../models/courseModel");
const responseHandler = require ("../helpers/responseHandler")

//api to register course;


const registerCourse = async(req, res) => {
    try{
        const course = await Course.create(req.body);
        responseHandler.data((res, course, 200))
    
    
    }
    catch(error){
        next("error:", error.message)
    }

}

// api to get all course




const getAllCourse = async (req, res, next) => {
    try {
        const course = await Course.find().lean().exec();
        if (course) {
            // return res.status(200).send(course);
        responseHandler.data(res, user, 200);
    } 
    else {
        res.status(404).send({ message: "Course not found..!" });
    }
      res.send(course);
    }
     catch (error) {
         next("error:", error.message);
        }
    };
    
    //api to get single course 

  const getSingleCourse = async(req, res, next) => {
        try {
                const course = await Course.findOne({id: req.params.id});
        if(course) {
            responseHandler.data(res, user, 200);
        }
        else {
                res.status(404).send({message: "Course not found"}) ;
        }
        res.send(course);
    }
    catch (error) {
        next("error:", error.message)
    }
  }

//api to update the course

  const updateCourse = async (req, res, next) => {
        try {
                const course = await Course.updateOne({id: req.params.id}, {$set: req.body});
                responseHandler.success(res, "Course Updated Successfully", 200);
    }
    catch(error) {
        next("error:", error.message)
    }
  }

  const deleteCourse = async (req, res, next) => {
    try{
        await Course.deleteOne({id:req.params.id});
        responseHandler.success(res, "Course Deleted Successfully", 200);
    }
    catch (error) {
        next("error:", error.message)
    }
  }
module.exports = {
    registerCourse,
    getAllCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse

}