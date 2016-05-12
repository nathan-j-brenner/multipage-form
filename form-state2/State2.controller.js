(function(){
	'use strict';

angular.module('app').controller('State2', State2);

function State2 (ResponsesService, Questions, $state) {
	var vm = this;
	
	vm.add = add;
	vm.question = Questions[1][0].question;
	vm.second = ResponsesService.second;
	
	function add (response){
		ResponsesService.add('second', response);
		ResponsesService.saveQuestion(vm.question);
		$state.go('state3');
	}
	
}

})();