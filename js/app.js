
angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/state1");

$stateProvider
	.state('state1', {
		url: "/state1",
		templateUrl: "partials/form-state1.html",
		controller: "State1 as vm"
	})
	.state('state2', {
		url: '/state2',
		templateUrl: 'partials/form-state2.html',
		controller: 'State2 as vm'
	})
	.state('state3', {
		url: '/state3',
		templateUrl: 'partials/form-state3.html',
		controller: 'State3 as vm'
	})
	.state('review', {
		url: "/review",
		templateUrl: "partials/form-review.html",
		controller: 'Review as vm'
	})
	.state('submit', {
		url: '/submit',
		templateUrl: 'partials/form-submit.html',
		controller: 'Submit as vm'
	});
});