
var movieDataApp = angular.module('movieData', ['ngRoute','ngResource']);

movieDataApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/start-page.html',
        controller: 'StartCtrl'

      }).
      when('/search', {
        templateUrl: 'partials/search-page.html',
        controller: 'SearchCtrl'
      }).
      when('/movie/:movieID', {
        templateUrl: 'partials/movie-page.html',
        controller: 'MovieCtrl'
      }).
      when('/checkout', {
        templateUrl: 'partials/recommended.html',
        controller: 'RecommendedCtrl'
      }).
      when('/favourites', {
        templateUrl: 'partials/favourites-page.html',
        controller: 'FavouritesCtrl'
        }).

      when('/final-page', {
        templateUrl: 'partials/final-page.html',
        controller: 'FinalCtrl'
      }).
      // TODO in Lab 5: add more conditions for the last two screens (overview and preparation)
      otherwise({
        redirectTo: '/home'
      });
  }]);