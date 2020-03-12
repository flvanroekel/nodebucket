/*
=======================================
  ; Title: employee.js
  ; Author: Faye Van Roekel
  ; Date: 10 March 2020
  ; Description: employee.js schema file
========================================
*/

const mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
  employeeId: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Employee', employeeSchema);