angular.module('myApp').factory('Responses', Responses);

function Responses () {
	var responses = {};
	
	responses.add = function(property, response){
		responses[property] = response;
	}
	
	return responses;
}