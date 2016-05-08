angular.module('myApp').controller('State1', State1);

function State1(Messages, $state){
	var vm = this;
	
	vm.name = Messages.name;
	
	vm.addName = function(name){
		Messages.addName(name);
		$state.go('state2');
	}
	// vm.newMessage = "Hello World!";
	
	// vm.addMessage = function (message) {
	// 	Messages.add(message);
	// 	vm.newMessage = '';
	// 	$state.go('review')
	// };
}