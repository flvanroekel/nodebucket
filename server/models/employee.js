/*
=======================================
  ; Title: employee.js
  ; Author: Faye Van Roekel
  ; Date: 10 March 2020
  ; Description: employee.js schema file
========================================
*/

const mongoose = require('mongoose');
const Item = require('./item');

//create employee schema
let employeeSchema = mongoose.Schema({
  empId: {type: String, unique: true, dropDups: true},
  firstName: {type: String},
  lastName: {type: String},
  todo: [Item],
  done: [Item]
});

//export model for public
module.exports = mongoose.model('Employee', employeeSchema);