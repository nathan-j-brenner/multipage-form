angular.module('myApp').controller('State1', State1);

function State1(messages, $state){
	var vm = this;
	
	vm.newMessage = "Hello World!";
	
	vm.addMessage = function (message) {
		messages.add(message);
		vm.newMessage = '';
		$state.go('review')
	};
}