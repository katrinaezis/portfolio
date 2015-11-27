"use strict";

var myApp = angular.module('myApp', ['ui.router', 'infinite-scroll']);

myApp.config(function($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			// template: $templateCache.get('home.html'),
			controller: 'HomeController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController'
		})
		.state('thankyou', {
			url: '/thankyou',
			templateUrl: 'templates/thankyou.html',
			controller: 'ThankyouController'
		});
});

myApp.controller('HomeController', function($scope, $http){
	console.log("sup");
	$http.get('data.json').success(function(data){
      console.log(data);
      $scope.projects = data;
    });

    $scope.getProjectImage = function(project, hovering) {
    	return hovering
    		? 'images/' + project['logo']
    		: 'images/' + project['logo-grey'];
    };

    $scope.projectClick = function(project) {

    }

    $scope.animateProjects = function() {
    	$(".eachProject:odd").addClass("animated fadeInRightBig");
    	$(".eachProject:even").addClass("animated fadeInLeftBig");
    }
});

// About page controller: define $scope.about as a string
myApp.controller('AboutController', function($scope){
	$scope.about = 'string';
});

// Content controller: define $scope.url as an image
myApp.controller('ContactController', function($scope){
	
});

myApp.controller('ThankyouController', function($scope){

});