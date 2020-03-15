/*
=======================================
  ; Title: app.js
  ; Author: Faye Van Roekel
  ; Date: 10 March 2020
  ; Description: app.js for api
========================================
*/

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee = require('./models/employee');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodebucket')));
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')));

// Global variables
const port = process.env.PORT || 3000;

/************************* Mongoose connection strings go below this line  ***************/

const connString = 'mongodb+srv://admin:admin@buwebdev-cluster-1-2fw4y.mongodb.net/nodebucket?retryWrites=true&w=majority';

mongoose
  .connect(connString, {
    promiseLibrary: require("bluebird"),
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.debug(`Connection to the database instance was successful`);
  })
  .catch(err => {
    console.log(`MongoDB Error: ${err.message}`);
  }); // ********end the connection
/**
 * API(s)
 */
// *******API is used  - gets single employee from database
app.get("/api/employees/:empId", function(req, res, next) {
  //*******Retrieves documents from mongoDB 
  Employee.findOne({ empId: req.params.empId }, function(err, employee) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employee);
      res.json(employee);
    }
  });
});
/**
 * ******Start / Create Server
 */
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`);
}); // ******end Create Server
