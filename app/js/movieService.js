movieDataApp.factory('Movie',function ($resource) {

var objectList = [];
var userRatingList = [];
var favouritesList = [333, 345, 346];


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
