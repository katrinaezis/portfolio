// 	Katrina Ezis
// Info-343
// Personal Portfolio
// November 23, 2015
// This is the JavaScript file for my personal
// portfolio. It utilizes angular to create a
// multi-page architecture that is dynamic. I also
// read in a json data and display pictures with it.

"use strict";

// Initiate angular myApp with a router and infinite-scroll
// The router will be used for our multi-page architecture
// The infinite-scroll will be used for an animation effect
var myApp = angular.module('myApp', ['ui.router', 'infinite-scroll']);

// Configure each of our pages so that they are connected
// Bring in stateProvider which tells angular where we currently
// are in terms of navigation and allows us to set our controllers
// for those different states.
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

// This is our controller for our home page
// we take in our scope, which will only be applied to this
// page and $http so that we can read in our json file.
myApp.controller('HomeController', function($scope, $http){
	
	// Reading json file, when successful we set a scope
	// value so it has access to json data
	$http.get('data/data.json').success(function(data){
      console.log(data);
      $scope.projects = data;
    });

    // We are checking if hovering is true or false and 
    // returning the correct image choice depending on
    // the selection.
    $scope.getProjectImage = function(project, hovering) {
    	return hovering
    		? 'images/' + project['logo']
    		: 'images/' + project['logo-grey'];
    };

    // $scope.projectClick = function(project) {
    // }

    // Applying annimations to every other image so that
    // they appear to come into the page towards each other
    $scope.animateProjects = function() {
    	$(".eachProject:odd").addClass("animated fadeInRightBig");
    	$(".eachProject:even").addClass("animated fadeInLeftBig");
    }
});