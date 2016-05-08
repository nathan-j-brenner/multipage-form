angular.module('myApp').controller('State2', State2);

function State2 (Questions, $state) {
	var vm = this;
	
	vm.quest = Questions.quest;
	
	vm.add = function(quest){
		Questions.add('quest', quest);
		$state.go('state3');
	}
	
}