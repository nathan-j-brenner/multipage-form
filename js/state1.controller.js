angular.module('myApp').controller('State1', State1);

function State1(Messages, $state){
	var vm = this;
	
	vm.newMessage = "Hello World!";
	
	vm.addMessage = function (message) {
		Messages.add(message);
		vm.newMessage = '';
		$state.go('review')
	};
}