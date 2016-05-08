angular.module('myApp').controller('State2', State2);

function State2 (Messages, $state) {
	var vm = this;
	
	vm.quest = Messages.quest;
	
	vm.addQuest = function(quest) {
		Messages.addQuest(quest);
		$state.go('state3');
	}
}