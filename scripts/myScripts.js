angular.module('app',[])

.controller('mainController', function($scope){
	$scope.taskList = [];

	

	$scope.addTask = function(){
		if($scope.task != null){
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

	$scope.closeEdit = function(space){
		if (event.keyCode == 13 && space != " "){
			$scope.editTask();
			
		}
		
	}

	$scope.removeTask = function() {

		var lngth = $scope.taskList.length;
		for (var i = 0; i < lngth; i++){
			console.log($scope.taskList[i].status);
			if($scope.taskList[i].status == true){
				$scope.taskList.splice(i, 1)
				
			}
		}
	}

	function getCurrentDate(){
		var curDate = new Date();
		return curDate;
	}

})