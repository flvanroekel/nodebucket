/*
=======================================
  ; Title: item.js
  ; Author: Faye Van Roekel
  ; Date: 16 March 2020
  ; Description: item.js schema file
========================================
*/

//requires mongoose
const mongoose = require('mongoose');

//create employee schema
let itemSchema = mongoose.Schema({
    text: {type: String}
});
//export model for public
module.exports = itemSchema;
