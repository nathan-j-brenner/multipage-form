angular.module('myApp').factory('Messages', Messages);

function Messages () {
	var messages = {};
	
	messages.list = [];
	
	messages.add = function(message) {
		messages.list.push({id: messages.list.length, text: message });
	};
	
	return messages;
}