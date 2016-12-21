/*
 * @Author: bishal
 * @Date:   2016-06-23 16:43:53
 * @Last Modified by:   bishal
 * @Last Modified time: 2016-06-24 15:57:30
 */

'use strict';
angular.module('qstnCtrl', [])

.controller('qstnCtrl', function($location, $window, $rootScope, $scope, qstnService) {
    var global = [];
    qstnService.getAll().success(function(data) {
        console.log(data)
        if (data) {
            $scope.qstns = data.data;
        }
    })

    $scope.checkAnswer = function(chk, qstn) {
        // qstn = JSON.parse(qstn);
        var flagr=false, flagw=false;
        console.log(chk, qstn.answer);
        if (chk === qstn.answer) {
            qstn.ans = true;
            console.log(qstn._id, qstn.ans)
            if (global.length > 1) {
                for (var index in global) {
                    if (global[index]._id == qstn._id) {
                        flagr = true;
                        global[index].ans = qstn.ans;
                    }
                }
            }
            if (flagr == false)
                global.push(qstn);
        } else {
            qstn.ans = false;
            console.log(qstn._id, qstn.ans)
            if (global.length > 1) {
                for (var index in global) {
                    if (global[index]._id == qstn._id) {
                        flagw = true;
                        global[index].ans = qstn.ans;
                    }
                }
            }
            if (flagw == false)
                global.push(qstn);
        }
    }

    $scope.submitQstns = function() {
        var count = 0;
        console.log(global);
        for (var each in global) {
            if (global[each].ans === true)
                count += 1;
        }
        console.log(count)
        $rootScope.count = count;
        $window.localStorage.setItem('count', count);
        $location.path('/success')
    }

    $scope.check = function(qstn,opt){
        console.log(qstn,opt);
    }
})
