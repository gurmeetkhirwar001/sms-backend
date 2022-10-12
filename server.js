const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());


// const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

const bodyParser = require("body-parser");
const cors = require("cors");
const ConnectDB = require("./config/dbConfig");
const errorHandler = require("./helpers/errorHandler");

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require('swagger-jsdoc');

// const swaggerDocument = require("./swagger.json");
// const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
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

const swaggerOptions = {
  swaggerDefinition: {
    
    info: {
      title: 'Hello World',
      version:"0.0.1",
      description: "My User Project Application API",
      contact:{
        name:"Amazing Developer"
      }
    },
    servers:[
      {
        url:"http://localhost:4000",
        description:"Local Dev"
      }
      
    ],
    tags:[
      {
        name:"User",
        description:"User Route"
      },
      {
        name:"Teacher",
        description:"Teacher Route"
      },
      {
        name:"Student",
        description:"Student Route"
      }
    ],
    paths:{
      "/api/user/create-user":{
        post:{
          tags:["User"],
          description: "Create new user in system",
        }
      },
      "/api/user/get-user":{
        get:{
          tags:["User"],
          description:"list of all users"
        }
      },
      "api/user/login": {
        post:{
          tags:["User"],
          description:"User Login"
        }
      },
      "api/user/getlogin": {
        get:{
          tags:["User"],
          description:"Get All the details of User Login"
        }
      },
      "api/user/get-single-users/:id": {
        get:{
          tags:["User"],
          description:"Get Details of individual"
        }
      },
      "api/user/delete-user/:id": {
        delete:{
          tags:["User"],
          description:"Remove the user"
        }
      },
      "api/user/update-user/:id": {
        patch:{
          tags:["User"],
          description:"Update the info of user"
        }
      },
      "api/teacher/create-teacher": {
        post:{
          tags:["Teacher"],
          description:"Create new taecher in system"
        }
      },
      "api/teacher/get-teacher": {
        get:{
          tags:["Teacher"],
          description:"list of all Teacher"
        }
      },
      "api/teacher/get-teacher": {
        get:{
          tags:["Teacher"],
          description:"list of all Teacher"
        }
      },
      "api/teacher/get-teacher/:id": {
        get:{
          tags:["Teacher"],
          description:"Get details of individual teacher"
        }
      },
      "api/teacher/update-teacher/:id": {
        put:{
          tags:["Teacher"],
          description:"Update the teacher's details"
        }
      },
      "api/teacher/delete-teacher/:id": {
        delete:{
          tags:["Teacher"],
          description:"Delete the teacher's details"
        }
      },
      "api/studentAttendance/create-student-attendance": {
        post:{
          tags:["Teacher"],
          description:"Create new student attendance in system"
        }
      },
      "api/studentAttendance/get-student-attendance": {
        get:{
          tags:["Teacher"],
          description:"Get all the list of student attendance"
        }
      },
      "api/studentAttendance/get-single-student-attendance/:id": {
        get:{
          tags:["Teacher"],
          description:"Getting individual details of the student attendance"
        }
      },
      "api/studentAttendance/update-student-attendance/:id": {
        put:{
          tags:["Teacher"],
          description:"Update the individual details of the student attendance"
        }
      },
      "api/studentAttendance/delete-student-attendance/:id": {
        delete:{
          tags:["Teacher"],
          description:"delete the individual details of the student attendance"
        }
      },
      "api/teacher-studentdetails/get-student": {
        get:{
          tags:["Teacher"],
          description:"Getting details of student profile"
        }
      },
      "api/teacher-studentdetails/get-single-student/:id": {
        get:{
          tags:["Teacher"],
          description:"Getting individual details of student profile"
        }
      },
      "api/documentTeacher/create-teacher-document": {
        post:{
          tags:["Teacher"],
          description:"Create new document in system"
        }
      },
      "api/documentTeacher/get-teacher-document": {
        get:{
          tags:["Teacher"],
          description:"Getting all the list of documents"
        }
      },
      "api/documentTeacher/get-single-teacher-document/:id": {
        get:{
          tags:["Teacher"],
          description:"Getting details of individual document"
        }
      },
      "api/documentTeacher/update-teacher-document/:id": {
        put:{
          tags:["Teacher"],
          description:"Update details of individual document"
        }
      },
      "api/documentTeacher/delete-teacher-document/:id": {
        delete:{
          tags:["Teacher"],
          description:"delete details of document"
        }
      },
      "api/eventTeacher/create-teacher-event": {
        post:{
          tags:["Teacher"],
          description:"Create new Event in system"
        }
      },
      
      "api/eventTeacher/get-teacher-event": {
        get:{
          tags:["Teacher"],
          description:"Getting list of all the events"
        }
      },
      "api/eventTeacher/get-single-teacher-event/:id": {
        get:{
          tags:["Teacher"],
          description:"Getting details of individual event"
        }
      },
      "api/eventTeacher/update-teacher-event/:id": {
        put:{
          tags:["Teacher"],
          description:"Update the details of individual event"
        }
      },
      "api/eventTeacher/delete-teacher-event/:id": {
        delete:{
          tags:["Teacher"],
          description:"Delete the details of individual event"
        }
      },
      "api/attendance/create-attendance": {
        post:{
          tags:["Teacher"],
          description:"Create student attendance in system by the teacher"
        }
      },
      "api/attendance/get-attendance": {
        get:{
          tags:["Teacher"],
          description:"Getting list of student attendance created by the teacher"
        }
      },
      
      "api/attendance/get-single-attendance/:id": {
        get:{
          tags:["Teacher"],
          description:"Getting individual student attendance created by the teacher"
        }
      },
      "api/attendance/update-attendance/:id": {
        put:{
          tags:["Teacher"],
          description:"Update individual student attendance created by the teacher"
        }
      },
      "api/attendance/delete-attendance/:id": {
        delete:{
          tags:["Teacher"],
          description:"Delete individual student attendance created by the teacher"
        }
      },
      
    }
  },
  apis: ['app.js'],
  
}
const swaggerDocument = swaggerJsDoc(swaggerOptions)
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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));





 //app.use("/api/upload",Upload)

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server is Running at ${process.env.PORT}`);
});
