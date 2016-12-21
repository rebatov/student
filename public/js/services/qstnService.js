/*
* @Author: bishal
* @Date:   2016-06-23 17:12:16
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 17:15:59
*/

'use strict';
angular.module('qstnService',[])

.factory('qstnService',function($http){
	var qstnFactory = {};

	qstnFactory.getAll=function(){
		console.log('at service')
		return $http.get('/question/getAll');
	}

	return qstnFactory;
})