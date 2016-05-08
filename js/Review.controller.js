angular.module('myApp').controller('Review', Review);

function Review(Messages, $state) {
	var vm = this;
	
	vm.messages = Messages;

	vm.submit = function(){
		alert('Submitted!');
		$state.go('submit');
	}
}