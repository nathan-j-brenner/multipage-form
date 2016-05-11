(function(){

angular.module('app').controller('State3', State3);

function State3(Responses, Questions, $state){
	var vm = this;
	
	var random = Math.floor(Math.random()*3);
	
	vm.questionObj = Questions[2][random];
	
	vm.third = Responses.third;
	
	vm.add = function(response){
		Responses.add('third', response);
		Responses.saveQuestion(vm.questionObj);
		$state.go('review');
	}
}

})();