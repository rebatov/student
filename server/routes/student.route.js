/*
 * @Author: bishal
 * @Date:   2016-06-23 12:18:17
 * @Last Modified by:   bishal
 * @Last Modified time: 2016-06-23 12:45:03
 */

'use strict';
var express = require('express');
var router = express.Router();
require('../models/student.model');
var Controller = require('../controllers/student.controller');
var stuController = new Controller();
var nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "bishaldangal96@gmail.com",
        pass: "ynwaJFT96"
    }
})




router.get('/getAll', function(req, res) {
    stuController.listAll(function(err, rslt) {
        if (err)
            res.json({
                "status": 500,
                "message": "ERROR"
            });
        else
            res.json({
                "status": 200,
                "message": "SUCCESS",
                "data": rslt
            });
    })
});

router.post('/getOne', function(req, res) {
    console.log(req.body.id)
    stuController.listOne(req.body.id, function(err, rslt) {
        if (err)
            res.json({
                "status": 500,
                "message": "ERROR"
            });
        else
            res.json({
                "status": 200,
                "message": "SUCCESS",
                "data": rslt
            });
    })
});

router.post('/insert', function(req, res) {
    stuController.create(req.body, function(err, rslt) {
        if (err)
            res.json({
                "status": 500,
                "message": "ERROR"
            });
        else
            res.json({
                "status": 200,
                "message": "SUCCESS",
                "data": rslt
            });
    })
});


router.put('/update', function(req, res) {
    console.log('-------', req.body)
    stuController.update(req.body, function(err, rslt) {
            if (err)
                res.json({
                    "status": 500,
                    "message": "ERROR"
                });
            else {
            	console.log(rslt)
                var mailOptions = {
                    from: 'bishaldangal96@gmail.com',
                    to: 'krishna.dhakal03@gmail.com',
                    subject: rslt.name+"!! You have successfully completed the entrance test",
                    html: "'<p>Please wait at least an hour for the confirmation of your obtained marks.</p>All the best " +
                        rslt.name + "!"
                };
                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        console.log("err :: ", error);

                    } else {
                        console.log('Interview Mail Has Been Sent: ' + info.response);
                        res.json({
                            "status": 200,
                            "message": "SUCCESS",
                            "data": rslt
                        });

                    }
                });
            }

    })
});
module.exports = router;
