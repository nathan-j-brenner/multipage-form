(function(){
	'use strict';

angular.module('app').controller('Submit', Submit);

function Submit(ResponsesService, $state){
	var vm = this;
	
	vm.responses = ResponsesService;
	vm.restart = restart;
	
	function restart () {
		ResponsesService.reset();
		$state.go('state1');
	}
}

})();