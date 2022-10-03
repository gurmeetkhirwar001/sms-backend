
const Schedule = require("../models/Schedule.Module");



// API to create schedule
const registerSchedule = async(req,res, next) => {
  
    try {
        const schedule = await Schedule.create(req.body);
       
        res.send(schedule);
    }  catch (error) {
        console.log("error:", error.message);
    }
}

// app.post('/api/posts', upload.single('image'), async (req, res) => {
//   const file = req.file
//   const caption = req.body.caption
//   const imageName = generateFileName()

//   const fileBuffer = await sharp(file.buffer)
//     .resize({ height: 1920, width: 1080, fit: "contain" })
//     .toBuffer()

//   await uploadFile(fileBuffer, imageName, file.mimetype)

//   const post = await prisma.posts.create({
//     data: {
//       imageName,
//       caption,
//     }
//   })
  
//   res.status(201).send(post)
// })


// if(req.files && req.files.media){
//   const file= req.files.media;
//   const uploadRes = await fileUploadService.uploadFileToAws(file);
//   return res.send(uploadRes);

// API to get all the schedule
const findSchedule = async(req, res, next) => {
    try {
        const schedule = await Schedule.find();
        if(schedule){
            return res.status(200).send(schedule)
        } else {
            res.status(404).send({ message: "schedule not found..!" });
        }
        res.send(schedule)
    } catch (error) {
        next('error:', error.message);
    }
}

// API to get single schedule

const getSingleSchedule = async(req, res, next) => {
    try {
        const schedule = await Schedule.findOne({ _id: req.params.id });
        if(schedule){
            return res.status(200).send(schedule)
        } else {
            res.status(404).send({ message: "schedule not found..!" });
        }
        res.send(schedule)
    } catch (error) {
        next('error:', error.message);
    }
}

// API to update the schedule
const updateSchedule = async (req, res, next) => {
    try {
      const schedule = await Schedule.updateOne(
        { _id: req.params.id },
        {
          $set: req.body,
        }
      );
      if (schedule) {
        return res
          .status(200)
          .send({ message: "schedule updated successfully..!" });
      } else {
        res.status(404).send({ message: "Update operation failed...!" });
      }
      res.send(schedule);
    } catch (error) {
      next("message", error.message);
    }
  };

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
      res.send(schedule);
    } catch (error) {
      next("message", error.message);
    }
  };



module.exports = {registerSchedule, findSchedule, getSingleSchedule, updateSchedule, deleteSchedule}