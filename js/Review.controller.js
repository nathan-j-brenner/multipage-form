angular.module('myApp').controller('Review', Review);

function Review(Questions, $state) {
	var vm = this;
	
	vm.questions = Questions;

	vm.submit = function(){
		alert('Submitted!');
		$state.go('submit');
	}
}