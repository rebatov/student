/*
* @Author: bishal
* @Date:   2016-06-23 15:44:57
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 15:48:37
*/

'use strict';
angular.module('stuService',[])

.factory('stuService',function($http){
	var stuFactory = {};

	stuFactory.create=function(stu){
		return $http.post('/student/insert', stu);
	}

	stuFactory.getStudent=function(id){
		console.log(id)
		return $http.post('/student/getOne',id)
	}
	stuFactory.update=function(id,marks){
		var obj ={};
		obj.id= id;
		obj.marks=marks;
		return $http.put('/student/update',obj)
	}

	return stuFactory;
})