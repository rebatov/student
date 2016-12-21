angular.module('adminService',[])

.factory('adminService',function($http){
	var adminFactory = {};

	adminFactory.getAll = function(){
		return $http.get("/student/getAll")
	}

	return adminFactory;
})