angular.module('myApp').factory('Messages', Messages);

function Messages () {
	var messages = {};
	
	/* 
	messages {
		name: string;
		quest: string;
		color: string;
	}
	*/
	messages.name = '';
	
	messages.addName = function(name){
		messages.name = name;
	}
	
	messages.quest = '';
	
	messages.addQuest = function(quest) {
		messages.quest = quest;
	}
	
	messages.color = '';
	
	messages.addColor = function(color){
		messages.color = color;
	}
	messages.list = [];
	
	messages.add = function(message) {
		messages.list.push({id: messages.list.length, text: message });
	};
	
	
	
	return messages;
}