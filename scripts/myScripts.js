angular.module('app',[])

.controller('mainController', function($scope){
	$scope.taskList = [];	

	var listData = localStorage['taskList'];

	if (listData !== undefined){
		$scope.taskList = JSON.parse(listData);
	}



	$scope.addTask = function(){
		if($scope.task != null){
			$scope.taskList.push({'taskContent': $scope.task, 'status': 'false', 'description': '', 'time' : getCurrentDate() });
			$scope.task = null;
			localStorage['taskList'] = JSON.stringify($scope.taskList);
			
			
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
	var answer = confirm("Are you sure?");
	if(answer == true){
		var lngth = $scope.taskList.length;
			for (var i = 0; i < lngth; i++){
				if($scope.taskList[i].status === true){
					$scope.taskList.splice(i, 1);
					localStorage['taskList'] = JSON.stringify($scope.taskList);
					
				}
			}
	}
	else{
		return false; 
		}
	}

	function getCurrentDate(){
		var curDate = new Date();
		var year = curDate.getFullYear()
		var month = curDate.getMonth();
		var day = curDate.getDate();
		var hours = curDate.getHours();
		var minutes = curDate.getMinutes();
		switch (month) {
			case 0:
				month = "January"
				break;
			case 1:
				month = "Febuary"
				break;
			case 2:				
				month = "March"
				break;
			case 3:
				month = "April"
				break;
			case 4:
				month = "May"
				break;
			case 5:
				month = "June"
				break;
			case 6:
				month = "July"
				break;
			case 7:
				month = "August"
				break;
			case 8:
				month = "September"
				break;
			case 9:
				month = "October"
				break;
			case 10:
				month = "November"
				break;
			case 11:
				month = "December"
				break;
		}
		if (minutes < 10){
			minutes = "0" + minutes;
		}
		if (hours < 10){
			hours = "0" + hours;
		}

	
		return year + ", " + day + " " + month + ", " + hours + ":" + minutes;
	}


})