(function(){
	'use strict';

angular.module('app').controller('State1', State1);

function State1(Responses, Questions, $state){
	var vm = this;
	
	vm.add = add;
	vm.name = Responses.name;
	vm.question = Questions[0][0].question;
	vm.questions = Responses.questions;
	
	function add (response){
		Responses.add('first', response);
		Responses.saveQuestion(vm.question);
		$state.go('state2');
	}
}

})();