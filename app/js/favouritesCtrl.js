
movieDataApp.controller('FavouritesCtrl', function ($scope,Movie) {

$scope.currentFavourites = [];

$scope.startPartial = function() {
	$scope.favouritesObjects = Movie.returnFavouritesList();
		for(i in $scope.favouritesObjects){
		$scope.getFavouriteseByID($scope.favouritesObjects[i]);
        console.log($scope.favouritesObjects[i]);
}
}
$scope.getResults = function() {
     if(!$scope.$$phase) {
             $scope.$apply();

    }
}


$scope.getFavouriteseByID = function(userInp) {
    Movie.getMovies.getMovieID({query:userInp}, function(data){
		$scope.currentFavourites.push(data);
		$scope.getResults();
     $scope.status = "Showing " + data + " results";
   },function(data){
     $scope.status = "There was an error";
});
}

$scope.startPartial();



});

