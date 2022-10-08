const AssignClass = require("../models/AssignClass.Model");
const responseHandler = require("../helpers/responseHandler");
const { s3Upload } = require("../Utils/S3");

// API to create Assign
const registerassign = async(req,res, next) => {
    // res.send("teacher route is working...")
    try {
      const upload =await  s3Upload(req.file);
      
      req.body.file = upload.link;
        const assign = await AssignClass.create(req.body);
        responseHandler.data(res, assign, 200);
    } catch (error) {
        next(error) 
    }
}


// API to get all the Assign
const findAssign = async(req, res, next) => {
    try {
        const assign = await AssignClass.find();
        if(assign){
            return res.status(200).send(assign)
        } else {
            res.status(404).send({ message: "Assignment not found..!" });
        }
        responseHandler.data(res, assign, 200);
      
    } catch (error) {
        next('error:', error.message);
    }
}

// API to get single Assign

const getSingleAssign = async(req, res, next) => {
    try {
        const assign = await AssignClass.findOne({ _id: req.params.id });
        if(assign){
            return res.status(200).send(assign)
        } else {
            res.status(404).send({ message: "Assignment not found..!" });
        }
        responseHandler.data(res, assign, 200);
    } catch (error) {
        next('error:', error.message);
    }
}

// API to update the Assign
const updateassign = async (req, res, next) => {
    try {
      const assign = await AssignClass.updateOne(
        { _id: req.params.id },
        {
          $set: req.body,
        }
      );
      if (assign) {
        return res
          .status(200)
          .send({ message: "Assignment updated successfully..!" });
      } else {
        res.status(404).send({ message: "Update operation failed...!" });
      }
      responseHandler.data(res, assign, 200);
    } catch (error) {
      next("message", error.message);
    }
  };

// API to delete the Assign
const deleteassign = async (req, res, next) => {
    try {
      // console.log('req.params.id :', req.params.id )
      const assign = await AssignClass.deleteOne({ _id: req.params.id });
      if (assign) {
        return res
          .status(200)
          .send({ message: "Assignment deleted successfully..!" });
      } else {
        res.status(404).send({ message: "Delete operation failed...!" });
      }
      responseHandler.data(res, assign, 200);
    } catch (error) {
      next("message", error.message);
    }
  };



module.exports = {registerassign, findAssign, getSingleAssign, updateassign, deleteassign}