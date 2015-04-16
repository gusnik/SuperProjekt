
movieDataApp.factory('Movie',function ($resource) {

<<<<<<< HEAD
var objectList = [];
var userRatingList = [];

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



  return this;

});
=======
//this.fetchPop = $resource('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&append_to_response=trailers',{api_key:'33e53562fbe46873e9379ecef2545dbc'});
>>>>>>> mackes-branch


return this;
});