angular.module('myApp').controller('State1List', State1List);

function State1List($scope){
	$scope.items = ["A", "List", "Of", "Items"];
}