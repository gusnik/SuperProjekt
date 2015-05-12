
movieDataApp.controller('RecentCtrl', function ($scope,Movie) {
	
$scope.recentMovieObjects = []; 

$scope.startPartial = function() {
	$scope.recentObjects  = Movie.returnRecentList();
	console.log("Tja");
	console.log($scope.recentObjects);
	if ($scope.recentObjects.length > 0){
	for(i in $scope.recentObjects){
		$scope.getFavouriteseByID($scope.recentObjects[i]);
	}
	}
}

$scope.getResults = function() {
	$scope.$apply();
}

$scope.getFavouriteseByID = function(userInp) {
    Movie.getMovies.getMovieID({query:userInp}, function(data){
		    $scope.recentMovieObjects.push(data);
		    $scope.getResults();
        },function(data){
     $scope.status = "There was an error";
	});
}


 	

$scope.test = function(){
	console.log("Hej");
	console.log($scope.recentMovieObjects);
}


$scope.startPartial();





});

