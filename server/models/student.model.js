/*
* @Author: bishal
* @Date:   2016-06-23 12:05:00
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 12:10:00
*/

'use strict';
var mongoose =require('mongoose');
var Schema =  mongoose.Schema;

var studentSchema = new Schema({
	name:{type:String},
	sex:{type:String},
	contact:{type:String},
	email:{type:String},
	symbolNo:{type:String},
	marks:{type:String},
	date:{type:Date, default:Date.now}
});

module.exports = mongoose.model('Student',studentSchema);