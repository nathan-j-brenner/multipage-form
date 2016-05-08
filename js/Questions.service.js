angular.module('myApp').factory('Questions', Questions);

function Questions () {
	var questions = [
		'What... is your name?',
		'What... is your quest?',
		[
			'What... is your favourite colour?',
			'What... is the capital of Assyria?',
			'What... is the air-speed velocity of an unladen swallow?'
		]
	];
	
	return questions;
}