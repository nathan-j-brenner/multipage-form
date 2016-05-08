angular.module('myApp').factory('Questions', Questions);

function Questions () {
	var responses = {};
	
	responses.add = function(property, response){
		responses[property] = response;
	}
	
	return responses;
}