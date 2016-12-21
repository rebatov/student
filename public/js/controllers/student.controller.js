/*
 * @Author: bishal
 * @Date:   2016-06-23 15:19:17
 * @Last Modified by:   bishal
 * @Last Modified time: 2016-06-24 15:26:59
 */

'use strict';
angular.module('stuCtrl', [])
    .controller('stuCtrl', function($scope, $location, $window, stuService) {
        $scope.submitStudent = function(isValid, stu) {
            $scope.submitted = true;
            console.log(stu);
            stu.symbolNo = stu.sn;
            if (isValid) {
                $window.localStorage.setItem('user', stu.name);
                stu.sex = stu.male || stu.female;
                stuService.create(stu)
                    .success(function(data) {
                        console.log(data.data);
                        if (data)
                            $window.localStorage.setItem('id',data.data._id);
                            $location.path('/questions');
                    })
            }
        }
    })
