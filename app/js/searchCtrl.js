
movieDataApp.controller('SearchCtrl', function ($scope,Movie,$http) {

$scope.getList = function() {
	return Movie.getObjectlist();
	$scope.movieList = Movie.getObjectlist();

}
$scope.getResults = function() {
	 $scope.$apply();
}


    $scope.getTop = function() {
        var valu = $("#topBtn").val();
        var url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc'
        key = '&api_key=33e53562fbe46873e9379ecef2545dbc';
        $.ajax({
            type: 'GET',
            url: url +  key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                console.dir(json);
                $scope.topMovies = json.results;
                console.log($scope.topMovies);
                $scope.getResults();



    },
        error: function(e) {
            console.log(e.message);
        }
    });

}



$scope.getSearchResults = function() {
var valu = $("#selectKeyWords").val();
var url = 'https://api.themoviedb.org/3/search/movie?query=';
		userInp = valu;
        key = '&api_key=33e53562fbe46873e9379ecef2545dbc';
        $.ajax({
            type: 'GET',
            url: url + userInp + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                console.dir(json);
                $scope.movies = json.results;
                console.log($scope.movies);
                $scope.getResults();



            },
            error: function(e) {
                console.log(e.message);
            }
    });

}






});
