/*
* @Author: bishal
* @Date:   2016-06-23 12:50:49
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 12:59:48
*/

'use strict';
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
require('../models/question.model');
var qstnController = function(){};

qstnController.prototype.create = function(question,callback){
	console.log(question)
	var qstn = new Question(question);
	qstn.save(function(err,result){
		if(err)
			callback(err);
		else
			callback(null,result);
	});
}

qstnController.prototype.listAll = function(callback){
	Question.find({},function(err,questions){
		if(err)
			callback(err);
		else
			callback(null,questions);
	});
}

module.exports = qstnController;