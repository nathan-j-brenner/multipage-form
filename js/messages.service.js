angular.module('myApp').factory('Messages', Messages);

function Messages () {
	var messages = {};
	
	messages.add = function(property, response){
		messages[property] = response;
	}
	
	return messages;
}