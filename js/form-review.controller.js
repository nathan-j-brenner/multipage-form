angular.module('myApp').controller('Review', Review);

function Review(messages, $state) {
	var vm = this;
	
	vm.messages = messages.list;
	vm.submit = function(){
		alert('Submitted!');
		$state.go('submit');
	}
}