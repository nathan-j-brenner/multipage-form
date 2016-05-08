angular.module('myApp').controller('State3', State3);

function State3(Questions, $state){
	var vm = this;
	
	vm.color = Questions.color;
	
	vm.add = function(color){
		Questions.add('color', color);
		$state.go('review');
	}
}