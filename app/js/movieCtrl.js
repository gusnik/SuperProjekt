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
                console.log(json);
                console.log("Hej");
                $scope.currentMovie = json;
                $scope.userRating = Movie.getUserRating($scope.currentMovie.id);
                console.log($scope.userRating);
                imageLink = "https://image.tmdb.org/t/p/w1920" + json.backdrop_path;
                $(".contentImage").css("background-image","url(" + imageLink + ")");   
                $scope.datWidth = json.vote_average*10 + "%";
                $scope.addToRecent();

                $scope.getResults();


            },
            error: function(e) {
                console.log(e.message);
            }
    });

}

$scope.getSearchResults = function() {
var valu = $("#searchForm").val();
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
                $scope.updatePop();

            },
            error: function(e) {
                console.log(e.message);
            }
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
    Movie.addToFavouritesList($scope.currentMovie.id);

}

$scope.addToRecent = function() {
    Movie.recentMoviesFunction($scope.currentMovie.id);
}



$scope.updatePop = function() {
     $scope.$apply();
}
$scope.startPartial();

 
});