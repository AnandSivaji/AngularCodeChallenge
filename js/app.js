'use strict';

var app = angular.module('meanbook', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('home');

	$stateProvider.state('login', {

		url : '/login',
		template: '<div class="container-fill mb-login-background"></div>',

	}).state('home', {

		url : '/home',
		templateUrl : 'partials/home.html'
		
	}).state('home.feed', {
		
		url: '/feed',
		templateUrl : 'partials/feed.html'
		
	}).state('home.profile', {
		
		url: '/profile',
		templateUrl : 'partials/profile.html'
	});
});
