const AssignClass = require("../models/AssignClass.Model");



// API to create Assign
const registerassign = async(req,res, next) => {
    // res.send("teacher route is working...")
    try {
        const Assign = await AssignClass.create(req.body);
        res.send(Assign)
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
        res.send(assign)
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
        res.send(assign)
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
      res.send(assign);
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
      res.send(assign);
    } catch (error) {
      next("message", error.message);
    }
  };



module.exports = {registerassign, findAssign, getSingleAssign, updateassign, deleteassign}