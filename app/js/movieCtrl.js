
movieDataApp.controller('MovieCtrl', function ($scope,$routeParams,Movie) {

$scope.ratingValues = ['', 1, 2, 3, 4, 5];

$scope.userRating = '';

$scope.getResults = function() {
	 $scope.$apply();
}

$scope.getMovieByID = function() {
$scope.currentMovie = '';
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


$scope.changeUserRating = function(){


}

$scope.test = function() {

    console.log($scope.userRating);
}





});
