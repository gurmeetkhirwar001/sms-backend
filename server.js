const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const ConnectDB = require("./config/dbConfig");
const errorHandler = require("./helpers/errorHandler");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const Routes = require("./routes");
const corsOptions = {
  origin: process.env.AccessURL,
  optionsSuccessStatus: 200,
};

ConnectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
// const specs = swaggerJsdoc(swaggerDocument);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/user", Routes.UserRoutes);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server is Running at ${process.env.PORT}`);
});
