(function(){
	'use strict';
angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/state1");

$stateProvider
	.state('state1', {
		url: "/state1",
		templateUrl: "form-state1/form-state1.html",
		controller: "State1 as vm"
	})
	.state('state2', {
		url: '/state2',
		templateUrl: 'form-state2/form-state2.html',
		controller: 'State2 as vm'
	})
	.state('state3', {
		url: '/state3',
		templateUrl: 'form-state3/form-state3.html',
		controller: 'State3 as vm'
	})
	.state('review', {
		url: "/review",
		templateUrl: "form-review/form-review.html",
		controller: 'Review as vm'
	})
	.state('submit', {
		url: '/submit',
		templateUrl: 'form-submit/form-submit.html',
		controller: 'Submit as vm'
	});
});

})();