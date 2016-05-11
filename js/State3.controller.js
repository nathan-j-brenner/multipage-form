(function(){
	'use strict';

angular.module('app').controller('State3', State3);

function State3(Responses, Questions, $state){
	var vm = this;
	var random = Math.floor(Math.random()*3);
	
	vm.add = add;
	vm.questionObj = Questions[2][random];
	vm.third = Responses.third;
	
	function add (response){
		Responses.add('third', response);
		Responses.saveQuestion(vm.questionObj);
		$state.go('review');
	}
}

})();