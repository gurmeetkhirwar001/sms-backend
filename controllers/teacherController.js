const Teacher = require("../models/teacherModel");


// API to create Teacher
const registerTeacher = async(req,res, next) => {
    // res.send("teacher route is working...")
    try {
        const teacher = await Teacher.create(req.body);
        res.send(teacher)
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
        res.send(teacher)
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
        res.send(teacher)
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
      res.send(teacher);
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
      res.send(teacher);
    } catch (error) {
      next("message", error.message);
    }
  };



module.exports = {registerTeacher, findTeacher, getSingleTeacher, updateTeacher, deleteTeacher}