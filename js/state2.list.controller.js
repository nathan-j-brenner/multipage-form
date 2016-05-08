angular.module('myApp').controller('State2Items', State2Items);

function State2Items(messages) {
	var vm = this;
	vm.messages = messages.list;
}