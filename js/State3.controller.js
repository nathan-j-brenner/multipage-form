angular.module('app').controller('State3', State3);

function State3(Responses, Questions, $state){
	var vm = this;

	var random = Math.floor(Math.random()*3);
	
	vm.question = Questions[2][random];
	
	vm.color = Responses.color;
	
	vm.add = function(color){
		Responses.add('color', color);
		Responses.saveQuestion(vm.question);
		$state.go('review');
	}
}