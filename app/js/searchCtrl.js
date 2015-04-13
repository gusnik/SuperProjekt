
movieDataApp.controller('SearchCtrl', function ($scope,Movie,$http) {

$scope.movieResponse = [];

$scope.getMovieList = function (input) {
	alert(input);
var userinput = input;
var url ="http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=[53ere629vhrsm9smf2xzgbgr]&q=";
var limit = "$page_limit=1";
var url2 = url + userinput + limit;
alert (url2);

$http({method: 'GET', url: url}).
  success(function (data, status, config) {

    if (status == 200) {
      page = data.page;                                             // saving current page for pagination
      $scope.movieResponse.push.apply($scope.movieResponse, data.results)   // appending new movies to current list
    } else {
      console.error('Error happened while getting the movie list.')
    }

  }).
  error(function (data, status, headers, config) {
    console.error('Error happened while getting the movie list.')
  });
}










});
