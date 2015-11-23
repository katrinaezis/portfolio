"use strict";

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController'
		})
		.state('blog', {
			url: '/blog',
			templateUrl: 'templates/blog.html',
			controller: 'BlogController'
		});
});

myApp.controller('HomeController', function($scope){
	$.getJSON('data.json', function(data) {
		console.log(data);
		$scope.projects = data;
		console.log($scope.projects);
	});
});

// About page controller: define $scope.about as a string
myApp.controller('AboutController', function($scope){
	$scope.about = 'string';
});

// Content controller: define $scope.url as an image
myApp.controller('BlogController', function($scope){
	$scope.url = 'http://favoritedogbreed.com/wp-content/uploads/2015/07/wallcoo.com_Pembroke_Welsh_Corgi_picture_85510.jpg';
});