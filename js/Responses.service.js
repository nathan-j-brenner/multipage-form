angular.module('app').factory('Responses', Responses);

function Responses () {
	var responses = {};
	
	responses.add = function(property, response){
		responses[property] = response;
	}
	
	responses.questions = [];
	
	responses.saveQuestion = function(question){
		responses.questions.push(question);
	}
	
	return responses;
}