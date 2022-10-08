const AssignClass = require("../models/AssignClass.Model");
const responseHandler = require("../helpers/responseHandler");





// API to get all the Assign
const studentAssign = async(req, res, next) => {
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





module.exports = { studentAssign, getSingleAssign}