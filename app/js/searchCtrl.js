
movieDataApp.controller('SearchCtrl', function ($scope,Movie,$http) {

$scope.getList = function() {
	return Movie.getObjectlist();
	$scope.movieList = Movie.getObjectlist();

}


$scope.getResults = function() {
     if(!$scope.$$phase) {
             $scope.$apply();

    }
}


$scope.getSearchResults = function() {
    var valu = $("#selectKeyWords").val();
    Movie.getMovies.getSearch({query:valu}, function(data){
        $scope.movies = data.results;
        $scope.getResults();
        },function(data){
     $scope.status = "There was an error";
});
}


});
