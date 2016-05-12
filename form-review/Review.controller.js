(function(){
	'use strict';

angular.module('app').controller('Review', Review);

function Review(Questions, ResponsesService, $state) {
	var vm = this;

	vm.questions = Questions;
	vm.responses = ResponsesService;
	vm.submit = submit;
	
	function submit () {
		if(vm.responses.questions[2] === vm.questions[0]){
			alert('Go on. Off you go.');
		}
		else if (vm.responses.questions[2] === vm.questions[1] && responses.color != 'Assur'){
			alert('You have been thrown over the edge into the volcano');
		}
		else if(vm.responses.questions[2] === vm.questions[1]){
			alert('Go on. Off you go.');
		}
		else if (vm.responses.color != 'about 24 miles per hour'){
			alert('You have been thrown over the edge into the volcano');
		} else {
			alert('Go on. Off you go.')
		}
		$state.go('submit');
	}
}

})();