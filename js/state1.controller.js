angular.module('myApp').controller('State1', State1);

function State1(Questions, $state){
	var vm = this;
	
	vm.name = Questions.name;
	
	vm.add = function(name){
		Questions.add('name', name);
		$state.go('state2');
	}
}