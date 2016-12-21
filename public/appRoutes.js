/*
* @Author: bishal
* @Date:   2016-06-23 13:09:59
* @Last Modified by:   bishal
* @Last Modified time: 2016-06-23 14:39:10
*/

'use strict';
angular.module('appRoutes' , ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider.
    when('/questions', {
       templateUrl: '/templates/questions.html'
       /*resolve: {
        message: function(messageService){
            return messageService.getMessage();
        },
        greeting: function(greetingService){
            return greetingService.getGreeting();
        }
    }*/
    }).
    when('/students', {
       templateUrl: '/templates/students.html'
    }).
	when('/success',{
		templateUrl: '/templates/success.html'
	}).
    when('/admin',{
        templateUrl: '/templates/admin.html'
    }).
	otherwise({
        redirectTo: '/'
    })

     $locationProvider.html5Mode(true);
})
