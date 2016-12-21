/*
 * @Author: bishal
 * @Date:   2016-06-23 12:24:34
 * @Last Modified by:   bishal
 * @Last Modified time: 2016-06-23 12:44:35
 */

'use strict';
var mongoose = require('mongoose');
var Student = mongoose.model('Student');
require('../models/student.model');
var stuController = function() {};
var fs = require("fs");
stuController.prototype.create = function(student, callback) {
    console.log(student)
    var stu = new Student(student);
    stu.save(function(err, result) {
        if (err)
            callback(err);
        else
            callback(null, result);
    });
}

stuController.prototype.listAll = function(callback) {
    Student.find({}, function(err, result) {
        if (err)
            callback(err);
        else
            callback(null, result);
    });
}

stuController.prototype.update = function(obj, callback) {
    Student.findOneAndUpdate({ "_id": obj.id }, { $set: { marks: obj.marks } }, function(err, result) {
        if (err)
            callback(err);
        else {
            Student.find({}, function(err, students) {
                if (err)
                    callback(err);
                else {
                    var stu = JSON.stringify(students);
                    fs.writeFileSync('./backup-students.json', stu);
                    callback(null, result);
                }
            })

        }
    });
}

stuController.prototype.listOne = function(id, callback) {
    Student.find({ "_id": id }, function(err, result) {
        if (err)
            callback(err);
        else
            callback(null, result);
    });
}


module.exports = stuController;
