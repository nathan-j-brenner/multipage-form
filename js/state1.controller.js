angular.module('app').controller('State1', State1);

function State1(Responses, Questions, $state){
	var vm = this;
	
	vm.question = Questions[0];
	
	vm.name = Responses.name;
	
	vm.add = function(name){
		Responses.add('name', name);
		Responses.saveQuestion(vm.question);
		$state.go('state2');
	}
}