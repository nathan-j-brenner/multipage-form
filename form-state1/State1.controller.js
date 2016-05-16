(function(){
	'use strict';

angular.module('app').controller('State1', State1);

function State1(ResponsesService, Questions, $state){
	var vm = this;

	// vm.add = add;
	vm.add = function (isValid){
		if(isValid) alert("our form is amazing");
	}
	vm.name = ResponsesService.name;
	vm.question = Questions[0][0].question;
	vm.questions = ResponsesService.questions;

	function add (response){
		ResponsesService.add('first', response);
		ResponsesService.saveQuestion(vm.question);
		$state.go('state2');
	}

}

})();
