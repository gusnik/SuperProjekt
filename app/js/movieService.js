movieDataApp.factory('Movie',function ($resource, $cookieStore) {

 if ($cookieStore.get('recMovies') != undefined){
   var recentMovies = $cookieStore.get('recMovies');
  }
  else{
      var recentMovies = [];
  }


 if ($cookieStore.get('favMovies') != undefined){
   var favouritesList = $cookieStore.get('favMovies');
  }
  else{
      var favouritesList = [];
  }

 if ($cookieStore.get('ratMovies') != undefined){
   var userRatingList = $cookieStore.get('ratMovies');
   console.log(userRatingList);
  }
  else{
    var userRatingList = [];
  }

var objectList = [];
var baseUrl = 'https://api.themoviedb.org/3/';
var selectMedia = "movie";

this.getMovies = $resource(baseUrl, {api_key: '33e53562fbe46873e9379ecef2545dbc'}, {
    getPopular: {url: baseUrl + 'discover/'+selectMedia+'?sort_by=popularity.desc'},
    getVideos: {url: baseUrl + selectMedia+'/:query/videos'},
    getMovie: {url: baseUrl + 'search/'+selectMedia+'?query=:query'},
    getMovieID: {url: baseUrl + selectMedia+'/:query'},
    getSearch: {url: baseUrl + 'search/'+selectMedia+'?query=:query'},
    getDatee: {url:baseUrl + 'discover/'+selectMedia+'?primary_release_date.gte=:query&primary_release_date.lte=2015-10-16'},
    getCredits: {url: baseUrl + selectMedia+'/:query/credits'},
    getSimilar: {url: baseUrl + selectMedia+'/:query?append_to_response=similar_movies'},
});

this.recentMoviesFunction = function(inputID) {
    for (i in recentMovies) {
        if (inputID === recentMovies[i]) {
            recentMovies.splice(i, 1);
        }
    }
    if (recentMovies.length > 4){
        var indexToRemove = 0;
        var numberToRemove = 1;
        recentMovies.splice(indexToRemove, numberToRemove);
    }
	recentMovies.push(inputID);
    $cookieStore.put('recMovies', recentMovies);

}

this.returnRecentList = function() {
    return recentMovies;

}

this.updateUserRating = function(inputID, inputRating){
    inputTuple = {"ID": inputID, "Rating":inputRating};
    if (inputRating !==  ''){
    	for (i in userRatingList) {
      		if (inputID === userRatingList[i].ID) {
       		var index = userRatingList.indexOf(userRatingList[i]);
        	userRatingList.splice(index, 1);
      }
    }
    userRatingList.push(inputTuple);
    $cookieStore.put('ratMovies', userRatingList);
}
else {
    
}
}

this.getUserRating = function(inputID) {
	if (userRatingList.length > 0){
		for (i in userRatingList) {
        	if (inputID == userRatingList[i].ID) {
            	return userRatingList[i].Rating;
        	} 
    	}
	return '';
	}
}

this.addToFavouritesList = function(inputID) {
  if(this.ifInFavouritesList(inputID)) {
    var index = favouritesList.indexOf(favouritesList[x]);
        favouritesList.splice(index, 1);
        $cookieStore.put('favMovies', favouritesList);

    return true;
  } else {
    favouritesList.push(inputID);
    $cookieStore.put('favMovies', favouritesList);
    return false;
  }
        
}

this.ifInFavouritesList = function(inputID) {
		for (x in favouritesList) {
			if (inputID == favouritesList[x]){
				return true;
			}
		}
	return false;
}

this.noFavourites = function() {
	if(favouritesList.length == 0) {
		return true;
	}
}

this.returnFavouritesList = function(){
    return favouritesList;
}

  return this;

});
