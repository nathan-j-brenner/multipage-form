(function(){
	'use strict';

angular.module('app').controller('State3', State3);

function State3(ResponsesService, Questions, $state){
	var vm = this;
	var random = Math.floor(Math.random()*3);
	
	vm.add = add;
	vm.questionObj = Questions[2][random];
	vm.third = ResponsesService.third;
	
	function add (response){
		ResponsesService.add('third', response);
		ResponsesService.saveQuestion(vm.questionObj);
		$state.go('review');
	}
}

})();