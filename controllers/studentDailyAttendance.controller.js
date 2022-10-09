const Attendance = require("../models/attendanceModel");
const responseHandler = require("../helpers/responseHandler");


// API to create Attendance
// const registerAttendance = async (req, res, next) => {
//   // res.send("attendance route is working...")
//   try {
//     const attendance = await Attendance.create(req.body);
//     responseHandler.data(res, attendance, 200);
    
//   } catch (error) {
//     console.log("error:", error.message);
//   }
// };

// API to get all the Attendance
const getDailyAttendance = async (req, res, next) => {

  
  try {
    const attendance = await Attendance.find().populate(
      {
        path:"student_id",select:["student_name"]
      }
    ).populate({path:"subject_id", select:["subject"]})
    if (attendance) {
      return res.status(200).send(attendance);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    responseHandler.data(res, attendance, 200);
  } catch (error) {
    next("error:", error.message);
  }
};

const getMonthlyAttendance = async (req, res, next) => {
  var start = new Date(2022, 09, 09, 10, 33, 30, 0);
   var end =  new Date(2022, 09, 31, 10, 33, 30, 0)
  
  
  try {
  
    const attendance = await Attendance.find({createdAt:{$gte: start, $lt: end

      }}).populate(
      {
        path:"student_id",select:["student_name"]
      }
    ).populate({path:"subject_id", select:["subject"]})
    
    if (attendance) {
      return res.status(200).send(attendance);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    responseHandler.data(res, attendance, 200);
    
  } catch (error) {
    next(error.message);
  }
};

const getSemesterWiseAttendance = async (req, res, next) => {
  var start = new Date(2022, 09, 09, 10, 33, 30, 0);
   var end =  new Date(2022, 09, 31, 10, 33, 30, 0)
  
  
  try {
  
    const attendance = await Attendance.find({createdAt:{$gte: start, $lt: end

      }}).populate(
      {
        path:"student_id",select:["student_name"]
      }
    ).populate({path:"subject_id", select:["subject"]}).populate({path:"semester_id", select:["student_semester"]})
    
    if (attendance) {
      return res.status(200).send(attendance);
    } else {
      res.status(404).send({ message: "Attendance not found..!" });
    }
    responseHandler.data(res, attendance, 200);
    
  } catch (error) {
    next(error.message);
  }
};


// MongoClient.connect(con, function (err, db) {
//   if (err) throw err
//   db.collection('orders').find({ "order_id": store_id, "orderDate": {     
//      "$gte": new Date(today), "$lt": new Date(tomorrow)}
//    }).toArray(function (err, result) {
//       console.log(result);
//       if (err) throw err
//         res.send(result);
//   })
// })


// API to get single Attendance


    


module.exports = {
  // registerAttendance,
  getDailyAttendance,
  getMonthlyAttendance,
  getSemesterWiseAttendance
 
};
