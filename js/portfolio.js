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
		});
});

myApp.controller('HomeController', function($scope, $http){
	// $scope.hide = false;
 //    $scope.show = false;
 //    $scope.identity = false;
	console.log("sup");
	$http.get('data.json').success(function(data){
      console.log(data);
      $scope.projects = data;
    });

    // $scope.hoverIn = function(project) {
    // 	console.log(project['id']);
    // 	$scope.hide = true;
    // 	$scope.show = true;
    // 	$scope.identity = project['id'];
    // 	// $scope.id = project
    // 	//console.log(project['logo']);
    // 	// console.log($scope.image);
    // 	// $('.eachImage').css("background-color", "blue");
    // 	// $(".eachImage").animate({width: '60%'}, "slow");
    // 	//$('.projectImage').hide();
    // }

    // $scope.hoverOut = function(project) {
    // 	// $scope.image = project['logo-grey'];
    // 	// console.log($scope.image);
    // 	$scope.hide = false;
    // 	$scope.show = false;
    // 	$scope.identity = project['id'];
    // }

    $scope.projectClick = function(project) {

    }

    $scope.animateProjects = function() {
    	$(".eachProject:odd").addClass("animated fadeInRightBig");
    	$(".eachProject:even").addClass("animated fadeInLeftBig");
    }
});

myApp.directive('myChange', function() {
	return function(scope, element, attrs, ctrl) {
		element.bind('mouseover', function() {
			console.log('scope is true');
			element.hide = true;
			element.show = true;
		});
		element.bind('mouseleave', function() {
			console.log('scope is false');
			element.hide = false;
			element.show = false;
		});
	};
});

// myApp.directive('myChange', function() {
// 	return function(scope, element) {
// 		element.bind('mouseover', function() {
// 			element.hide = true;
// 			element.show = true;
// 		});
// 		element.bind('mouseleave', funciton() {
// 			element.hide = false;
// 			element.show = false;
// 		});
// 	};
// });

// About page controller: define $scope.about as a string
myApp.controller('AboutController', function($scope){
	$scope.about = 'string';
});

// Content controller: define $scope.url as an image
myApp.controller('ContactController', function($scope){
	
});