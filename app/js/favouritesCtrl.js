
movieDataApp.controller('FavouritesCtrl', function ($scope,Movie) {

$scope.favourites = [];

$scope.startPartial = function() {
	// $scope.getFavouritesList();
	$scope.getFavouriteseByID();
}

$scope.getResults = function() {
	 $scope.$apply();
}


$scope.getFavouritesList = function(){
	$scope.favList = Movie.returnFavouritesList();
}

$scope.test = function(){
	console.log($scope.favourites);

}



$scope.getFavouriteseByID = function() {
$scope.favList = Movie.returnFavouritesList();
for (i in $scope.favList){
		var userInp = $scope.favList[i];	
		var url = 'https://api.themoviedb.org/3/movie/';
		    key = '?api_key=33e53562fbe46873e9379ecef2545dbc';
		    $.ajax({
		        type: 'GET',
		        url: url + userInp + key,
		        async: false,
		        jsonpCallback: 'testing',
		        contentType: 'application/json',
		        dataType: 'jsonp',
		        success: function(json) {
		            console.dir(json);
		            console.log("Hej");
		            $scope.favourites.push(json);
		            $scope.getResults();
		            console.log(json);
		        },
		        error: function(e) {
		            console.log(e.message);
		        }
		});
	}
}


$scope.startPartial();


});

