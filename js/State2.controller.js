angular.module('myApp').controller('State2', State2);

function State2 (Responses, Questions, $state) {
	var vm = this;
	
	vm.question = Questions[1];
	
	vm.quest = Responses.quest;
	
	vm.add = function(quest){
		Responses.add('quest', quest);
		$state.go('state3');
	}
	
}