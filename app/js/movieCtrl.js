movieDataApp.controller('MovieCtrl', function ($scope,$routeParams,Movie) {

$scope.ratingValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$scope.currentMovie = '';

$scope.getResults = function() {
     if(!$scope.$$phase) {
             $scope.$apply();

    }}

$scope.startPartial = function() {
    $scope.getMovieByID();
	var oneIsAdd = Movie.ifInFavouritesList($routeParams.movieID);
	if(oneIsAdd) {
		$scope.addOrRemove = "remove from favourites";
	} else {
		$scope.addOrRemove = "add to favourites";
	}
}

$scope.getMovieByID = function() {
    var currentMovieID = $routeParams.movieID;
    Movie.getMovies.getSimilar({query:currentMovieID}, function(data){
        $scope.currentMovie = data;
        $scope.userRating = Movie.getUserRating($scope.currentMovie.id);
        imageLink = "https://image.tmdb.org/t/p/w1920" + data.backdrop_path;
        $(".contentImage").css("background-image","url(" + imageLink + ")");   
        $scope.datWidth = data.vote_average*10 + "%";
        $scope.similiarMovies = data.similar_movies.results;
        $scope.addToRecent();
        $scope.getCredits();
        $scope.getResults();
     $scope.status = "Showing " + data + " results";
   },function(data){
     $scope.status = "There was an error";
});
}

$scope.getSearchResults = function() {
    var valu = $("#searchForm").val();
    Movie.getMovies.getSearch({query:valu}, function(data){
        $scope.movies = data.results;
        $scope.updatePop();
        },function(data){
     $scope.status = "There was an error";
});
}

$scope.getCredits = function() {
    var currentMovieID = $routeParams.movieID;
    Movie.getMovies.getCredits({query:currentMovieID}, function(data){
        $scope.people = data;
        $scope.getResults();
        },function(data){
     $scope.status = "There was an error";
});
}

$scope.checkEnter = function(keyEvent) {
  //if (keyEvent.which === 13)
    $scope.getSearchResults();
}

$scope.setUserRating = function(){
    Movie.updateUserRating($scope.currentMovie.id, $scope.userRating);
 
}

$scope.$watch('userRating', function(newvalue, oldvalue){   
    $scope.setUserRating();

})

$scope.addToFavourites = function() {
    if(Movie.addToFavouritesList($scope.currentMovie.id)) {
	$scope.addOrRemove = "add to favourites";
	} else {
	$scope.addOrRemove = "remove from favourites";
	}
}

$scope.addToRecent = function() {
    Movie.recentMoviesFunction($scope.currentMovie.id);
}

$scope.updatePop = function() {
     if(!$scope.$$phase) {
             $scope.$apply();
    }
}

$scope.startPartial();

});