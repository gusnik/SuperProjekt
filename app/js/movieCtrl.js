movieDataApp.controller('MovieCtrl', function ($scope,$routeParams,Movie) {

$scope.ratingValues = [1, 2, 3, 4, 5];

$scope.currentMovie = '';

$scope.getResults = function() {
     $scope.$apply();
}


$scope.startPartial = function() {
    $scope.getMovieByID();
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
                $scope.userRating = Movie.getUserRating($scope.currentMovie.id);
                console.log($scope.userRating);
                imageLink = "https://image.tmdb.org/t/p/w1920" + json.backdrop_path;
                $(".contentImage").css("background-image","url(" + imageLink + ")");
                $scope.getResults();

            },
            error: function(e) {
                console.log(e.message);
            }
    });

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


$scope.startPartial();

$scope.updatePop = function() {
     $scope.$apply();
}
 
});