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
const documentRoutes = require('./routes/documentRoute')
const eventRoutes = require('./routes/eventRoute')
const studentAttendanceRoutes = require('./routes/studentAttendanceRoute')
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

app.use("/api/document", documentRoutes); // document routes
app.use("/api/event", eventRoutes); //event routes
app.use('/api/studentAttendance', studentAttendanceRoutes)

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server is Running at ${process.env.PORT}`);
});
