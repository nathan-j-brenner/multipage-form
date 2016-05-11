(function(){

angular.module('app').controller('State2', State2);

function State2 (Responses, Questions, $state) {
	var vm = this;
	
	vm.question = Questions[1][0].question;
	
	vm.second = Responses.second;
	
	vm.add = function(response){
		Responses.add('second', response);
		Responses.saveQuestion(vm.question);
		$state.go('state3');
	}
	
}

})();