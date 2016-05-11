(function(){
	'use strict';

angular.module('app').controller('Submit', Submit);

function Submit(Responses, $state){
	var vm = this;
	
	vm.responses = Responses;
	vm.restart = restart;
	
	function restart () {
		Responses.reset();
		$state.go('state1');
	}
}

})();