
movieDataApp.controller('SearchCtrl', function ($scope,Movie) {

$scope.getSearchResults = function(){
	var valu = $("#selectKeyWords").val();
	objectList = Movie.getMovieByStr(valu);
	console.log(objectList);

}





});