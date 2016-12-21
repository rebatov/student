angular.module('adminCtrl',[])
.controller('adminCtrl',function($window,$scope,adminService){
	$scope.dummy = "Hola Senorita"
	adminService.getAll().success(function(data){
		console.log(data);
		$scope.students = data.data
	})

	 $scope.orderByMe = function(x) {
        $scope.myOrderBy =x;
    }
})