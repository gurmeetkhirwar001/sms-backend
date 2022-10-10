const express = require("express");
const app = express();
app.use(express.json());

const bodyParser = require("body-parser");
const cors = require("cors");
const ConnectDB = require("./config/dbConfig");
const errorHandler = require("./helpers/errorHandler");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const Routes = require("./routes");
const studentRoute = require("./routes/studentRoute");
const teacherRoutes = require("./routes/teacherRoute");
const attendanceRoutes = require("./routes/attendanceRoute");
const teacher_attendanceRoutes = require('./routes/Teacher_attendanceRoute');
const assignclassRoutes = require('./routes/assignclassRoute')
const ContactenquiryRoutes = require('./routes/ContactenquiryRoute')
const ScheduleRoutes = require("./routes/ScheduleRoute")
const EventRoutes = require('./routes/eventRoute')
const DocumentRoutes = require('./routes/DocumentRoute')
const StudentclassRoute= require('./routes/studentclassRoute')
const assignadminclassRoutes = require('./routes/AdminassignclassRoute')
const adminDocumentRoutes = require('./routes/AdminDocumentRoute')
const teacheradmin_attendanceRoutes = require('./routes/Teacher_attendanceadminRoute');
const EventadminRoutes=require('./routes/eventadminRoute')
const studentDailyAttendanceRoutes= require("./routes/studentDailyAttendaceRoute");
const SubjectRoutes = require("./routes/subjectRoute");
const courseRoutes = require('./routes/courseRoute');
const semesterRoutes = require('./routes/semesterRoute');
const documentTeacherRoutes = require('./routes/documentTeacherRoute')
const eventTeacherRoutes = require('./routes/eventTeacherRoute')
const studentAttendanceRoutes = require('./routes/studentAttendanceRoute')
const TeacherattendanceRoutes= require('./routes/TeacherattendanceRoute')
const TeacherStudentRoutes = require('./routes/Teacher-studentRoute')

//const Upload = require('./controllers/uploadFileController')
const corsOptions = {
  origin: process.env.AccessURL,
  optionsSuccessStatus: 200,
};

// app.get('/', async (req, res) => {
//   res.status(200).send("API is running...")
// })

ConnectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
// const specs = swaggerJsdoc(swaggerDocument);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/user", Routes.UserRoutes);

app.use("/api/student", studentRoute); // Student routes
app.use("/api/teacher", teacherRoutes); // teacher routes
app.use("/api/attendance", attendanceRoutes); // attendance routes
app.use("/api/student/teacher_attendance", teacher_attendanceRoutes); // teacherattendance routes
app.use("/api/student/assignclass",assignclassRoutes); //assign
app.use("/api/enquiry",ContactenquiryRoutes); //enquiry
app.use("/api/schedule",ScheduleRoutes); //schedule
app.use("/api/student/event",EventRoutes); //event
app.use("/api/admin/event",EventadminRoutes); //event
app.use("/api/student/document",DocumentRoutes); //event
app.use("/api/student_class",StudentclassRoute)
app.use("/api/admin/document",adminDocumentRoutes);
app.use("/api/admin/assignclass",assignadminclassRoutes); //assign
app.use("/api/teacher_attendance", teacheradmin_attendanceRoutes); // teacherattendance routes
app.use("/api/dailyAttendance", studentDailyAttendanceRoutes); // attendance routes
app.use("/api/subject",SubjectRoutes); //subject
app.use('/api/course', courseRoutes);
app.use('/api/semester/', semesterRoutes);
app.use('/api/documentTeacher', documentTeacherRoutes);
app.use('/api/eventTeacher', eventTeacherRoutes)
app.use('/api/studentAttendance', studentAttendanceRoutes);
app.use('/api/teacher-attendance',TeacherattendanceRoutes);
app.use('/api/teacher-studentdetails',TeacherStudentRoutes)





 //app.use("/api/upload",Upload)

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server is Running at ${process.env.PORT}`);
});
