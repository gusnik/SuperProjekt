
movieDataApp.factory('Movie',function ($resource) {
var objectList = [];
var userRatingList = [];

this.updateUserRating = function(inputID, inputRating){
    inputTuple = {"ID": inputID, "Rating":inputRating};
    for (i in userRatingList) {
      if (inputID === userRatingList[i].ID) {
        var index = userRatingList.indexOf(userRatingList[i]);
        userRatingList.splice(index, 1);
      }
    }
    userRatingList.push(inputTuple);
    console.log(userRatingList);
}

this.getUserRating = function(inputID) {
    for (i in userRatingList) {
        if (inputID === userRatingList[i].ID) {
            return userRatingList[i].Rating;
        } else {
            return ''
        }

    }
}



this.getMovieByStr = function(userinput) {
objectList = [];
var url = 'https://api.themoviedb.org/3/search/movie?query=';
		userInp = userinput;
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
                objectList.push(json.results);

            },
            error: function(e) {
                console.log(e.message);
            }
    });

}

this.getObjectlist = function() {
	return objectList;
}



  return this;

});