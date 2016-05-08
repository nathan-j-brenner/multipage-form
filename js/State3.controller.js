angular.module('myApp').controller('State3', State3);

function State3(Responses, Questions, $state){
	var vm = this;
	
	vm.question = Questions[2][0];
	
	vm.color = Responses.color;
	
	vm.add = function(color){
		Responses.add('color', color);
		$state.go('review');
	}
}