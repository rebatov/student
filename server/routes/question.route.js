/*
* @Author: bishal
* @Date:   2016-06-23 12:18:28
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 13:01:05
*/

'use strict';

var express = require('express');
var router = express.Router();
require('../models/question.model');
var Controller = require('../controllers/question.controller');
var qstnController = new Controller();

router.get('/getAll',function(req,res){
	qstnController.listAll(function(err,questions){
		if(err)
			res.json({
				"status":500,
				"message":"ERROR"
			});
		else
			res.json({
				"status":200,
				"message":"SUCCESS",
				"data":questions
			});
	})
});

router.post('/insert',function(req,res){
	qstnController.create(req.body,function(err,rslt){
		if(err)
			res.json({
				"status":500,
				"message":"ERROR"
			});
		else
			res.json({
				"status":200,
				"message":"SUCCESS"
			});
	})
});

module.exports = router;