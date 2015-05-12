movieDataApp.controller('HeadCtrl', function ($scope,Movie,$sce) {
	
$scope.setProject = function () {
	var id = "https://www.youtube.com/embed/"+ $scope.movieID + "?autoplay=1&controls=0&showinfo=0&rel=0";
	//$scope.currentProject = $scope.projects[id];
	$scope.currentProjectUrl = $sce.trustAsResourceUrl(id);
}

$scope.updatePop = function() {
	 $scope.$apply();
}

var openSearchVar = 0;
$scope.openSearch = function() {
	if(openSearchVar%2==0) {
		$(".searchHolder").addClass("searchHolder searchHolderOpen");
		document.getElementById("searchForm").focus();
	} else {
		$(".searchHolder").removeClass("searchHolderOpen");

	}
	openSearchVar++;
}

// }

$scope.getSearchResults = function() {
    var valu = $("#searchForm").val();
    Movie.getMovies.getSearch({query:valu}, function(data){
        $scope.movies = data.results;
        $scope.updatePop();
        },function(data){
     $scope.status = "There was an error";
});
}


$scope.checkEnter = function(keyEvent) {
  //if (keyEvent.which === 13)
    $scope.getSearchResults();
}

 
});
