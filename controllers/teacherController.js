const Teacher = require("../models/teacherModel");
const { s3Upload } = require("../Utils/S3");
const responseHandler = require("../helpers/responseHandler");
// API to create Teacher
const registerTeacher = async(req,res, next) => {
    // res.send("teacher route is working...")
    try {
      const upload =await  s3Upload(req.file);
      
      req.body.file = upload.link;
        const teacher = await Teacher.create(req.body);
        responseHandler.data(res, teacher, 200);
        // res.send(teacher)
    } catch (error) {
        next(error) 
    }
}


// API to get all the teacher
const findTeacher = async(req, res, next) => {
    try {
        const teacher = await Teacher.find();
        if(teacher){
            return res.status(200).send(teacher)
        } else {
            res.status(404).send({ message: "Teacher not found..!" });
        }
        responseHandler.data(res, teacher, 200);
        // res.send(teacher)
    } catch (error) {
        next('error:', error.message);
    }
}

// API to get single Teacher

const getSingleTeacher = async(req, res, next) => {
    try {
        const teacher = await Teacher.findOne({ _id: req.params.id });
        if(teacher){
            return res.status(200).send(teacher)
        } else {
            res.status(404).send({ message: "Teacher not found..!" });
        }
        responseHandler.data(res, teacher, 200);
        // res.send(teacher)
    } catch (error) {
        next('error:', error.message);
    }
}

// API to update the Teacher
const updateTeacher = async (req, res, next) => {
    try {
      const teacher = await Teacher.updateOne(
        { _id: req.params.id },
        {
          $set: req.body,
        }
      );
      if (teacher) {
        return res
          .status(200)
          .send({ message: "Teacher updated successfully..!" });
      } else {
        res.status(404).send({ message: "Update operation failed...!" });
      }
      responseHandler.data(res, teacher, 200);
      // res.send(teacher);
    } catch (error) {
      next("message", error.message);
    }
  };

// API to delete the teacher
const deleteTeacher = async (req, res, next) => {
    try {
      // console.log('req.params.id :', req.params.id )
      const teacher = await Teacher.deleteOne({ _id: req.params.id });
      if (teacher) {
        return res
          .status(200)
          .send({ message: "Teacher deleted successfully..!" });
      } else {
        res.status(404).send({ message: "Delete operation failed...!" });
      }
      responseHandler.data(res, teacher, 200);
      // res.send(teacher);
    } catch (error) {
      next("message", error.message);
    }
  };



module.exports = {registerTeacher, findTeacher, getSingleTeacher, updateTeacher, deleteTeacher}