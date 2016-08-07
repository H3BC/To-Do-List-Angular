angular.module('app',[])

.controller('mainController', function($scope){
	$scope.taskList = [];

	

	$scope.addTask = function(){
		if($scope.task != null || $scope.task != " "){
			console.log(getCurrentDate())
			$scope.taskList.push({'taskContent': $scope.task, 'status': 'false', 'time' : getCurrentDate() });
			$scope.task = null;
		}
		else{
			return false;
		}
	}

	$scope.editTask = function(){
		event.target.contentEditable = event.target.contentEditable == 'true' ? 'false' : 'true';

	}

	function getCurrentDate(){
		var curDate = new Date();
		return curDate;
	}

})