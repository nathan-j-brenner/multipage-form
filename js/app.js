
angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/state1");

$stateProvider
	.state('state1', {
		url: "/state1",
		templateUrl: "partials/state1.html",
		controller: "State1 as vm"
	})
	.state('review', {
		url: "/review",
		templateUrl: "partials/form-review.html",
		controller: 'Review as vm'
	})
});