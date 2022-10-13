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
const TeacherStudentRoutes = require('./routes/Teacher-studentRoute');
const { string } = require("joi");

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
      },
      {
        name:"Admin",
        description: "Admin Route"
      }
    ],
    paths:{
      "/api/user/create-user":{
        post:{
          tags:["User"],
          description: "Create new user in system",
          requestBody:{
            content: {
              "application/json" : {
                schema: {
                  type:"object",
                  parameters:[
                    {
                      name: "user",
                      in: "body",
                      description: "User name",
                      schema: {
                        $ref: "#/definitions/User"
                      }
                    },
                  ]
                }
              }
            }
          },
          responses: {
            200: {
                description: "successful operation",
                schema: {
                    "type": "object"
                }
            },
            400: {
              description: "Invalid status",
              schema: {
                  "$ref": "#/definitions/InvalidResponse"
              }
          }
          }
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
      "api/semester/create-semester": {
        post:{
          tags:["Teacher"],
          description:"Create new semester in the system "
        }
      },
      "api/student/create-student": {
        post:{
          tags:["Student"],
          description:"Create student in system"
        }
      },
      "api/student/get-student": {
        get:{
          tags:["Student"],
          description:"List of all the students"
        }
      },
      "api/student/get-single-student/:id": {
        get:{
          tags:["Student"],
          description:"getting individual details of the student"
        }
      },
      "api/student/update-student/:id": {
        put:{
          tags:["Student"],
          description:"Update individual details of the student"
        }
      },
      "api/student/delete-student/:id": {
        delete:{
          tags:["Student"],
          description:"Delete individual details of the student"
        }
      },
      "api/dailyAttendance/get-daily-attendance": {
        get:{
          tags:["Student"],
          description:"Getting details of daily attendance"
        }
      },
      "api/dailyAttendance/get-daily-monthly-attendance": {
        get:{
          tags:["Student"],
          description:"Getting details of monthly attendance"
        }
      },
      "api/dailyAttendance/get-semester-attendance": {
        get:{
          tags:["Student"],
          description:"Getting details of semester wise attendance"
        }
      },
      "api/student/assignclass/get-allassign": {
        get:{
          tags:["Student"],
          description:"Getting details of student assign in the class"
        }
      },
      "api/student/assignclass/get-assign/:id": {
        get:{
          tags:["Student"],
          description:"Getting individual details of student assign in the class"
        }
      },
      "api/student/event/get-event": {
        get:{
          tags:["Student"],
          description:"Getting details of student event"
        }
      },
      "api/student/event/get-single-event/:id": {
        get:{
          tags:["Student"],
          description:"Getting details of individual student event"
        }
      },
      "api/student/document/get-document": {
        get:{
          tags:["Student"],
          description:"Getting details of student document"
        }
      },
      "api/student/document/get-single-document/:id": {
        get:{
          tags:["Student"],
          description:"Getting details of individual student document"
        }
      },
      "api/student_class/student_class": {
        post:{
          tags:["Student"],
          description:"Create new student class in the system"
        }
      },
      "api/student_class/get-student_class": {
        get:{
          tags:["Student"],
          description:"Getting details of all student class"
        }
      },
      "api/subject/create-subject": {
        get:{
          tags:["Student"],
          description:"Create list of new subject"
        }
      },
      "api/subject/get-subject": {
        get:{
          tags:["Student"],
          description:"Getting list of all subjects"
        }
      },
      "api/student/teacher_attendance/get-teacher_attendance": {
        get:{
          tags:["Student"],
          description:"Getting list of all teacher attendance"
        }
      },
      "api/teacher_attendance/create-teacher_attendance": {
        post:{
          tags:["Admin"],
          description:"Create teacher attendance in the system"
        }
      },
      "api/teacher_attendance/get-teacher_attendance": {
        get:{
          tags:["Admin"],
          description:"Getting list of teacher attendance"
        }
      },
      "api/teacher_attendance/get -single-teacher_attendance/:id": {
        get:{
          tags:["Admin"],
          description:"Getting details of individual  teacher attendance"
        }
      },
      "api/teacher_attendance/update-teacher_attendance/:id": {
        put:{
          tags:["Admin"],
          description:"Update details of individual teacher attendance"
        }
      },
      "api/teacher_attendance/delete-teacher_attendance/:id": {
        delete:{
          tags:["Admin"],
          description:"Delete details of individual teacher attendance "
        }
      },
      "api/admin/assignclass/create-assign": {
        post:{
          tags:["Admin"],
          description:"Create class assign in the system"
        }
      },
      "api/admin/assignclass/get-assign": {
        get:{
          tags:["Admin"],
          description:"Getting list of class assign "
        }
      },
      "api/admin/assignclass/get-assign/:id": {
        get:{
          tags:["Admin"],
          description:"Getting details of individual class assign"
        }
      },
      "api/admin/assignclass/update-assign/:id": {
        put:{
          tags:["Admin"],
          description:"Update details of individual class assign"
        }
      },
      "api/admin/assignclass/delete-assign/:id": {
        delete:{
          tags:["Admin"],
          description:"Delete details of individual class assign"
        }
      },
      "api/enquiry/create-enquiry": {
        post:{
          tags:["Admin"],
          description:"Create new enquiry in the system"
        }
      },
      "api/enquiry/get-enquiry": {
        get:{
          tags:["Admin"],
          description:"Getting list of all enquiries"
        }
      },
      "api/enquiry/get-single-enquiry/:id": {
        get:{
          tags:["Admin"],
          description:"Getting details of specific enquiry"
        }
      },
      "api/enquiry/update-enquiry/:id": {
        put:{
          tags:["Admin"],
          description:"Update details of enquiry"
        }
      },
      "api/enquiry/delete-enquiry/:id": {
        delete:{
          tags:["Admin"],
          description:"Delete enquiry in the system"
        }
      },
      "api/admin/document/create-document": {
        post:{
          tags:["Admin"],
          description:"Create new document for admin in the system"
        }
      },
      "api/admin/document/get-document": {
        get:{
          tags:["Admin"],
          description:"Getting all the documents of admin"
        }
      },
      "api/admin/document/get-single-document/:id": {
        get:{
          tags:["Admin"],
          description:"Getting individual details of admin"
        }
      },
      "api/admin/document/update-document/:id": {
        put:{
          tags:["Admin"],
          description:"Update details of admin"
        }
      },
      "api/admin/document/delete-document/:id": {
        delete:{
          tags:["Admin"],
          description:"Delete details of admin"
        }
      },
      "api/admin/event/create-event": {
        post:{
          tags:["Admin"],
          description:"Create new event for admin in the system"
        }
      },
      "api/admin/event/get-event": {
        get:{
          tags:["Admin"],
          description:"Getting all the event"
        }
      },
      "api/admin/event/get-single-event/:id": {
        get:{
          tags:["Admin"],
          description:"Getting details of the specific event"
        }
      },
      "api/admin/event/update-event/:id": {
        put:{
          tags:["Admin"],
          description:"Update details of the event"
        }
      },
      "api/admin/event/delete-event/:id": {
        delete:{
          tags:["Admin"],
          description:"Deleting the events"
        }
      },
      "api/schedule/create-schedule": {
        post:{
          tags:["Admin"],
          description:"Create new schedule for admin"
        }
      },
      "api/schedule/get-schedule": {
        get:{
          tags:["Admin"],
          description:"Getting all the details of schedule"
        }
      },
      "api/schedule/get-single-schedule/:id": {
        get:{
          tags:["Admin"],
          description:"Getting details of specific admin schedule"
        }
      },
      "api/schedule/update-schedule/:id": {
        put:{
          tags:["Admin"],
          description:"Updating schedule for admin"
        }
      },
      "api/schedule/delete-schedule/:id": {
        delete:{
          tags:["Admin"],
          description:"Deleting admin schedule"
        }
      },
      "api/teacher-attendance/create-teacher-attendance": {
        post:{
          tags:["Admin"],
          description:"Create new teacher attendance"
        }
      },
      "api/teacher-attendance/get-teacher-attendance": {
        get:{
          tags:["Admin"],
          description:"Getting list of all the teacher attendance"
        }
      },
      "api/teacher-attendance/get-single-teacher-attendance/:id": {
        get:{
          tags:["Admin"],
          description:"Getting details of individual teacher attendance"
        }
      },
      "api/teacher-attendance/update-teacher-attendance/:id": {
        put:{
          tags:["Admin"],
          description:"Update details of teacher attendance"
        }
      },
      "api/teacher-attendance/delete-teacher-attendance/:id": {
        delete:{
          tags:["Admin"],
          description:"Delete details of teacher attendance"
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
