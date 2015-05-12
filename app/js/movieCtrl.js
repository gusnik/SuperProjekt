movieDataApp.controller('MovieCtrl', function ($scope,$routeParams,Movie) {

$scope.ratingValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$scope.currentMovie = '';
$scope.addOrRemove = "add to favourites";

$scope.getResults = function() {
     if(!$scope.$$phase) {
             $scope.$apply();

    }}

$scope.startPartial = function() {
    $scope.getMovieByID();
}

$scope.getMovieByID = function() {
    var currentMovieID = $routeParams.movieID;
    Movie.getMovies.getSimilar({query:currentMovieID}, function(data){
        $scope.currentMovie = data;
        $scope.userRating = Movie.getUserRating($scope.currentMovie.id);
        console.log($scope.userRating);
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

        console.log("HEj");
        console.log($scope.people.crew);
        console.log($scope.people);

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

$scope.test = function(){
    console.log($scope.userRating);
}

$scope.$watch('userRating', function(newvalue, oldvalue){   
    $scope.setUserRating();

})

$scope.addToFavourites = function() {
    $scope.addOrRemove = Movie.addToFavouritesList($scope.currentMovie.id);

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