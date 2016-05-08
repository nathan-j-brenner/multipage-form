angular.module('myApp').controller('State2', State2);

function State2(messages) {
	var vm = this;
	vm.messages = messages.list;
}