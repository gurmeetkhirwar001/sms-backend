// const { response } = require("express");
const StudentAttendance = require("../models/studentAttendance.model");
const responseHandler = require("../helpers/responseHandler");
//api to register document;
const registerStudentAttendance = async (req, res, next) => {
  try {
    const studentAttendance = await StudentAttendance.create(req.body);
      return res.status(200).send(studentAttendance);
    // responseHandler.data((res, document, 200));
  } catch (error) {
    next("error:", error.message);
  }
};
// api to get all document
const getAllStudentAttendance = async (req, res, next) => {
  try {
    const studentAttendance = await StudentAttendance.find().lean().exec();
    if (studentAttendance) {
      return res.status(200).send(studentAttendance);
      // responseHandler.data(res, document, 200);
    } else {
      res.status(404).send({ message: "StudentAttendance not found..!" });
    }
    res.send(studentAttendance);
  } catch (error) {
    next("error:", error.message);
  }
};
//api to get single document
const getSingleStudentAttendance = async (req, res, next) => {
  try {
    const studentAttendance = await StudentAttendance.findOne({ id: req.params.id });
    if (studentAttendance) {
      // responseHandler.data(res, document, 200);
      return res.status(200).send(studentAttendance);
    } else {
      res.status(404).send({ message: "StudentAttendance not found" });
    }
    res.send(studentAttendance);
  } catch (error) {
    next("error:", error.message);
  }
};
//api to update the document
const updateStudentAttendance = async (req, res, next) => {
  try {
    const studentAttendance = await StudentAttendance.updateOne(
      { id: req.params.id },
      { $set: req.body }
    );
    // responseHandler.success(res, document, 200);
      return res.status(200).send(studentAttendance);
  } catch (error) {
    next("error:", error.message);
  }
};
const deleteStudentAttendance = async (req, res, next) => {
  try {
    const studentAttendance = await StudentAttendance.deleteOne({ id: req.params.id });
    // responseHandler.success(res, document, 200);
      return res.status(200).send(studentAttendance);
  } catch (error) {
    next("error:", error.message);
  }
};
module.exports = {
    registerStudentAttendance,
    getAllStudentAttendance,
    getSingleStudentAttendance,
    updateStudentAttendance,
    deleteStudentAttendance,
};