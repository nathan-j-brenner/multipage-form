
angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/state1");

$stateProvider
	.state('state1', {
		url: "/state1",
		templateUrl: "partials/form-state1.html",
		controller: "State1 as vm"
	})
	.state('review', {
		url: "/review",
		templateUrl: "partials/form-review.html",
		controller: 'Review as vm'
	})
	.state('submit', {
		url: '/submit',
		templateUrl: 'partials/form-submit.html',
	});
});