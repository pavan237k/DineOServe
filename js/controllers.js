'use strict';
var appControllers = angular.module('appControllers',[]);

appControllers.controller('HomeController', ['$scope', function($scope) {
	$scope.greeting = 'Hello World!';
	// Animations init
	new WOW().init();
}]);