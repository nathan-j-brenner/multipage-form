(function(){

angular.module('app').factory('Responses', Responses);

function Responses () {
	var responses = {};
	
	responses.add = function(property, response){
		responses[property] = response;
	}
	
	responses.reset = function(){
		responses.name = '';
		responses.quest = '';
		responses.color = '';
		responses.questions = [];
	}
	
	responses.questions = [];
	
	responses.saveQuestion = function(question){
		responses.questions.push(question);
	}
	
	return responses;
}

})();