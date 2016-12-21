/*
* @Author: bishal
* @Date:   2016-06-23 13:28:16
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 14:23:26
*/

'use strict';
angular.module('mainCtrl',[])

.controller('MainController',function($rootScope,$scope,$http){
	console.log('hello')
	$rootScope.header = "EastPole"
})