angular.module('myApp').controller('State3', State3);

function State3(Messages, $state){
	var vm = this;
	
	vm.color = Messages.color;
	
	vm.add = function(color){
		Messages.add('color', color);
		$state.go('review');
	}
}