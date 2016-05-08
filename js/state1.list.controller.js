angular.module('myApp').controller('State1List', State1List);

function State1List($scope){
	var vm = this;
	vm.items = ["A", "List", "Of", "Items"];
}