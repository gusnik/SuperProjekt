
movieDataApp.controller('MovieCtrl', function ($scope,$routeParams,Movie) {
var currentMovie = $routeParams.movieID;

$scope.getResults = function() {
	 $scope.$apply();
}

$scope.getSearchResults = function() {
var currentMovie = $routeParams.movieID;
var url = 'https://api.themoviedb.org/3/movie/';
		userInp = currentMovie;
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
                $scope.currentMovie = json.results;
                console.log($scope.currentMovie);
                $scope.getResults();

            },
            error: function(e) {
                console.log(e.message);
            }
    });

}

$scope.getSearchResults();


});
