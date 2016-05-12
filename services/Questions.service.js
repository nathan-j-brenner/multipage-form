(function(){
	'use strict';
angular.module('app').factory('Questions', Questions);

function Questions () {
	var questions = [
		[
			{
				question: 'What... is your name?',
				response: 'Your name is '
			}
		],
		[
			{
				question: 'What... is your quest?',
				response: 'You seek '
			}
		],
		[
			{
				question: 'What... is your favourite colour?',
				response: 'Your favorite colour is '
			},
			{
				question: 'What... is the capital of Assyria?',
				response: 'The capital of Assyria is '
			},
			{
				question: 'What... is the air-speed velocity of an unladen swallow?',
				response: 'The air-speed velocity of an unladen swallow is '
			}
		]
	];
	
	return questions;
}

})();