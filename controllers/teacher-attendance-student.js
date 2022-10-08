const Teacher_Attendance = require("../models/Teacher-attendance.Model");
const responseHandler = require("../helpers/responseHandler");
// API to create Attendance


// API to get all the Attendance

const getTeacher_Attendance = async (req, res, next) => {
  try {
    const attendance = await Teacher_Attendance.find().populate(
        {
            
                path:"teacher_id",select:["faculty_name"]
              }
          
    )
    if (attendance) {
      return res.status(200).send(attendance);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    res.send(attendance);
  } catch (error) {
    next("error:", error.message);
  }
};

// API to get single Attendance

const getSingleTeacher_Attendance = async (req, res, next) => {
  try {
    const attendance = await Teacher_Attendance.findOne({ _id: req.params.id });
    // .populate("student_id");
    if (attendance) {
      return res.status(200).send(attendance);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    res.send(attendance);
  } catch (error) {
    next("error:", error.message);
  }
};


module.exports = {
  
  getTeacher_Attendance,
  getSingleTeacher_Attendance,
 
};
