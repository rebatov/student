/*
 * @Author: bishal
 * @Date:   2016-06-24 12:17:04
 * @Last Modified by:   bishal
 * @Last Modified time: 2016-06-24 16:03:30
 */

'use strict';
angular.module('successCtrl', [])
    .controller('successCtrl', function(stuService, $rootScope, $window, $location, $scope) {
        var id = $window.localStorage.getItem('id');
        console.log(id);
        $scope.user = $window.localStorage.getItem('user');
        $scope.marks = $window.localStorage.getItem('count');
        var marks = $scope.marks.toString();
        console.log(typeof(marks));
            stuService.update(id,marks).success(function(res){
            	console.log(res);
            });
        $window.localStorage.removeItem('user');
        $window.localStorage.removeItem('id');
        $window.localStorage.removeItem('count');
        // console.log('marks',marks);
    })
