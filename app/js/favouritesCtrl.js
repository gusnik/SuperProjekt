
movieDataApp.controller('FavouritesCtrl', function ($scope,Movie) {

$scope.currentFavourites = [];


$scope.startPartial = function() {
	$scope.favouritesObjects = Movie.returnFavouritesList();
		for(i in $scope.favouritesObjects){
		$scope.getFavouriteseByID($scope.favouritesObjects[i]);
}
}

$scope.getResults = function() {
	 $scope.$apply();
}


$scope.test = function(){
	console.log($scope.favourites);

}



$scope.getFavouriteseByID = function(userInp) {
// $scope.favList = Movie.returnFavouritesList();
		var url = 'https://api.themoviedb.org/3/movie/';
		    key = '?api_key=33e53562fbe46873e9379ecef2545dbc';
		    $.ajax({
		        type: 'GET',
		        url: url + userInp + 	key,
		        async: false,
		        //jsonpCallback: 'testing',
		        contentType: 'application/json',
		        dataType: 'jsonp',
		        success: function(json) {
		            console.dir(json);
		            console.log("Hej");
		            $scope.currentFavourites.push(json);
		            $scope.getResults();
		            console.log($scope.currentFavourites);
		        },
		        error: function(e) {
		            console.log(e.message);
		        }
		});
	
}


$scope.startPartial();


});

