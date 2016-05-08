angular.module('myApp').controller('State1List', State1List);

function State1List(messages){
	var vm = this;
	vm.items = ["A", "List", "Of", "Items"];
	
	vm.newMessage = "Hello World!";
	
	vm.addMessage = function (message) {
		messages.add(message);
		vm.newMessage = '';
	};
}