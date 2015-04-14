
movieDataApp.controller('MovieCtrl', function ($scope,$routeParams,Movie) {

$scope.ratingValues = [1, 2, 3, 4, 5];

$scope.userRating = '';

$scope.currentMovie = '';

$scope.getResults = function() {
	 $scope.$apply();
}
$scope.getUserRating = function() {
    return $scope.userRating;

}

$scope.getMovieByID = function() {
var currentMovieID = $routeParams.movieID;
var url = 'https://api.themoviedb.org/3/movie/';
		userInp = currentMovieID;
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
                $scope.currentMovie = json;
                console.log($scope.currentMovie);
                $scope.getResults();

            },
            error: function(e) {
                console.log(e.message);
            }
    });

}

$scope.getMovieByID();


$scope.setUserRating = function(){
    console.log($scope.userRating);
    Movie.updateUserRating($scope.currentMovie.id, $scope.userRating);
 
}






});
