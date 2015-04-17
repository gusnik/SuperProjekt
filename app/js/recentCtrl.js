
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




$scope.getFavouriteseByID = function(userInp) {
// $scope.favList = Movie.returnFavouritesList();
		var url = 'https://api.themoviedb.org/3/movie/';
		    key = '?api_key=33e53562fbe46873e9379ecef2545dbc';
		    $.ajax({
		        type: 'GET',
		        url: url + userInp + key,
		        async: false,
		        //jsonpCallback: 'testing',
		        contentType: 'application/json',
		        dataType: 'jsonp',
		        success: function(json) {
		            console.dir(json);
		            console.log("Hej");
		            $scope.recentMovieObjects.push(json);
		            $scope.getResults();
		            console.log($scope.recentMovieObjects);
		        },
		        error: function(e) {
		            console.log(e.message);
		        }
		});
	
}

$scope.test = function(){
	console.log("Hej");
	console.log($scope.recentMovieObjects);
}


$scope.startPartial();





});

