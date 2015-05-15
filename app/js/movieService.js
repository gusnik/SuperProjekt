movieDataApp.factory('Movie',function ($resource) {

var objectList = [];
var userRatingList = [];

var recentMovies = [];
var favouritesList = [];
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
    console.log(userRatingList);
}
else {
    
}
}

this.getUserRating = function(inputID) {
    if (userRatingList.length > 0){
        for (i in userRatingList) {
         if (inputID === userRatingList[i].ID) {
            return userRatingList[i].Rating;
        } else {
            return '';
        }
    }
}
else{
    return '';
}
}


this.addToFavouritesList = function(inputID) {
	if(this.ifInFavouritesList(inputID)) {
		var index = favouritesList.indexOf(favouritesList[x]);
        favouritesList.splice(index, 1);
		return "add to favourites";
	} else {
		favouritesList.push(inputID);
		return "remove from favourites";
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

this.returnFavouritesList = function(){
    return favouritesList;
}

  return this;

});
