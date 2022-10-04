const express = require("express");
const app = express();
app.use(express.json());

const bodyParser = require("body-parser");
const cors = require("cors");
const ConnectDB = require("./config/dbConfig");
const errorHandler = require("./helpers/errorHandler");
const swaggerJsdoc = require("swagger-jsdoc");
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
app.use("/api/teacher_attendance", teacher_attendanceRoutes); // teacherattendance routes
app.use("/api/assignclass",assignclassRoutes); //assign
app.use("/api/enquiry",ContactenquiryRoutes); //enquiry
app.use("/api/schedule",ScheduleRoutes); //schedule
app.use("/api/admin/event",EventRoutes); //event
app.use("/api/admin/document",DocumentRoutes); //event
 //app.use("/api/upload",Upload)

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server is Running at ${process.env.PORT}`);
});
