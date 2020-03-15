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
  empId: { type: String, unique: true, dropDups: true },
  firstName: { type: String },
  lastName: { type: String },
}, {
  collection: 'employees'
})

module.exports = mongoose.model('Employee', employeeSchema);