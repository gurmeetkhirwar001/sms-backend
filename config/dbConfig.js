const { connect } = require("mongoose");

const ConnectDB = async () => {
  try {
    await connect(process.env.mongooseURL);
    console.log("DB connected");
  } catch (e) {
    console.log(e);
  }
};

module.exports = ConnectDB;
