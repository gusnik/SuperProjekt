
movieDataApp.controller('RecommendedCtrl', function ($scope,Movie) {


	$scope.getMovieByTitle = function(){
		a = Movie.returnFavouritesList()
		b = Movie.getMovieByID(a)
		for (i in a){
			console.log(a[i])
			console.log(Movie.movie)
		}
	}


	
 

});

