angular.module('myApp').factory('messages', messages);

function messages () {
	var messages = {};
	
	messages.list = [];
	
	messages.add = function(message) {
		messages.list.push({id: messages.list.length, text: message });
	};
	
	return messages;
}