(function(){

angular.module('app').controller('State1', State1);

function State1(Responses, Questions, $state){
	var vm = this;
	
	vm.questions = Responses.questions;
		
	vm.question = Questions[0][0].question;
	
	vm.name = Responses.name;
	
	vm.add = function(response){
		Responses.add('first', response);
		Responses.saveQuestion(vm.question);
		$state.go('state2');
	}
}

})();