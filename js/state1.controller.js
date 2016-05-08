angular.module('myApp').controller('State1', State1);

function State1(Messages, $state){
	var vm = this;
	
	vm.name = Messages.name;
	
	vm.add = function(name){
		Messages.add('name', name);
		$state.go('state2');
	}
}