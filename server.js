/*
* @Author: bishal
* @Date:   2016-06-23 11:48:33
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 12:53:30
*/

'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');


mongoose.connect(config.database,function(err){
	if(err)
		console.log('ERROR connecting to database...');
	else
		console.log('Database connection successful..')
});

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//creating the public as root folder
app.use(express.static(__dirname + '/public/'));

// app.use('/student',student)
 

//to show the status like get and post success/failure in console
app.use(morgan('dev'));


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// route requirements
var student = require('./server/routes/student.route');
var question = require('./server/routes/question.route');
// var admin = require('./server/routes/admin.route');

app.use('/student',student);
app.use('/question',question);
// app.use('/admin',admin)


// rendering index page if the routes are other than specified
app.get('*', function(req, res) {
    // res.render("/public/app/views/index");
    console.log("index start here");
    // console.log(__dirname + '/public/admin/index.html');
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port, function(err) {
    if (err)
        console.log("ERROR");
    else
        console.log("Magic happening at port:" + config.port + "...");
});
