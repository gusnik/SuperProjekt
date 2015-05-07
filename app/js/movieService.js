movieDataApp.factory('Movie',function ($resource) {

var objectList = [];
var userRatingList = [];
var recentMovies = [157336, 177572];
var favouritesList = [157336, 122917, 177572];
var movie


this.recentMoviesFunction = function(inputID) {
    for(i in recentMovies){
        if (inputID === recentMovies[i]){ 
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
    console.log("HEJ");
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

this.getMovieByID = function(id){
    var url = 'https://api.themoviedb.org/3/movie/';
    key = '?api_key=33e53562fbe46873e9379ecef2545dbc';
    $.ajax({
        type: 'GET',
        url: url + id + key,
        async: false,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(json) {
            console.dir(json);

        },
        error: function(e) {
            console.log(e.message);
        }
    });

}


this.addToFavouritesList = function(inputID) {
    if (favouritesList.length > 0){
        for (x in favouritesList) {
            if (inputID === favouritesList[x]){
                var index = favouritesList.indexOf(userRatingList[x]);
                favouritesList.splice(index, 1);
            }
        }
    }
    favouritesList.push(inputID);
}


this.returnFavouritesList = function(){
    return favouritesList;
}

  return this;

});


