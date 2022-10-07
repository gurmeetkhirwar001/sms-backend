
const Subject = require("../models/Subject.model");
// const { s3Upload } = require("../Utils/S3");
const responseHandler = require("../helpers/responseHandler");


// API to create schedule
// const registerSchedule = async(req,res, next) => {
  
//     try {
//       //"message": "The bucket does not allow ACLs",
//       const upload =await  s3Upload(req.file);
//       // console.log(upload)
      
//         const schedule = await   Schedule.create(req.body);
//         responseHandler.data(res, schedule,upload, 200);
//         // res.send(upload);
//     }  catch (error) {
//         console.log("error:", error.message);
//     }
// }


// API to get all the schedule
const Allclass = async(req, res, next) => {
    try {
        const subject = await Schedule.find().populate(
            {
                
                    path:"class",select:["faculty_name"]
                  }
        )
        if(subject){
            return res.status(200).send(schedule)
        } else {
            res.status(404).send({ message: "schedule not found..!" });
        }
        responseHandler.data(res, subject, 200);
    } catch (error) {
        next('error:', error.message);
    }
}

// API to get single schedule

// const getSingleSchedule = async(req, res, next) => {
//     try {
//         const schedule = await Schedule.findOne({ _id: req.params.id });
//         if(schedule){
//             return res.status(200).send(schedule)
//         } else {
//             res.status(404).send({ message: "schedule not found..!" });
//         }
//         responseHandler.data(res, schedule, 200);
//     } catch (error) {
//         next('error:', error.message);
//     }
// }

// // API to update the schedule
// const updateSchedule = async (req, res, next) => {
//     try {
//       const schedule = await Schedule.updateOne(
//         { _id: req.params.id },
//         { userImage: req.file.path },
//         {
//           $set: req.body,
//         }
//       );
//       if (schedule) {
//         return res
//           .status(200)
//           .send({ message: "schedule updated successfully..!" });
//       } else {
//         res.status(404).send({ message: "Update operation failed...!" });
//       }
//       responseHandler.data(res, schedule, 200);
//     } catch (error) {
//       next("message", error.message);
//     }


// API to delete the schedule
const deleteSchedule = async (req, res, next) => {
    try {
      // console.log('req.params.id :', req.params.id )
      const schedule = await Schedule.deleteOne({ _id: req.params.id });
      if (schedule) {
        return res
          .status(200)
          .send({ message: "schedule deleted successfully..!" });
      } else {
        res.status(404).send({ message: "Delete operation failed...!" });
      }
      responseHandler.data(res, schedule, 200);
    } catch (error) {
      next("message", error.message);
    }
  };



module.exports = {registerSchedule, findSchedule, getSingleSchedule, updateSchedule, deleteSchedule}