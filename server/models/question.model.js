/*
* @Author: bishal
* @Date:   2016-06-23 12:10:51
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 12:16:36
*/

'use strict';
var mongoose =require('mongoose');
var Schema =  mongoose.Schema;

var questionSchema = new Schema({
		qstn:{type:String},
		options:{type:Array},
		answer:{type:String}
});

module.exports = mongoose.model('Question',questionSchema);