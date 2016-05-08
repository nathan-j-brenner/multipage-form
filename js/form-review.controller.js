angular.module('myApp').controller('Review', Review);

function Review(messages) {
	var vm = this;
	vm.messages = messages.list;
}