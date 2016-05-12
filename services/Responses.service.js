(function(){
	'use strict';

angular.module('app').factory('ResponsesService', ResponsesService);

function ResponsesService () {
	var questions = [];
	var responses = {
		add: add,
		questions: questions,
		reset: reset,
		saveQuestion: saveQuestion
	};
	
	return responses;
	
	function add (property, response){
		responses[property] = response;
	};
	
	function reset () {
		responses.name = '';
		responses.quest = '';
		responses.color = '';
		responses.questions = [];
	};
	
	function saveQuestion (question) {
		responses.questions.push(question);
	};
}

})();