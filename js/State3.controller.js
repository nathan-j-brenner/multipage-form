angular.module('myApp').controller('State3', State3);

function State3(Messages, $state){
	var vm = this;
	
	vm.color = Messages.color;
	
	vm.addColor = function(color){
		Messages.addColor(color);
		$state.go('review');
	}
}