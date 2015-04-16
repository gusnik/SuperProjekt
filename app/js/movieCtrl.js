movieDataApp.controller('MovieCtrl', function ($scope,Movie,$sce) {
	
$scope.setProject = function () {
	var id = "https://www.youtube.com/embed/"+ $scope.movieID + "?autoplay=1&controls=0&showinfo=0&rel=0";
	//$scope.currentProject = $scope.projects[id];
	$scope.currentProjectUrl = $sce.trustAsResourceUrl(id);
}

$scope.updatePop = function() {
	 $scope.$apply();
}

angular.element(document).ready(function () {
	var url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
	//var url = 'https://api.themoviedb.org/3/movie/157336/videos';
        key = '&api_key=33e53562fbe46873e9379ecef2545dbc';
        $.ajax({
            type: 'GET',
            //url: url + userInp + key,
			url: url + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
				var number = 2;
				imageLink = "https://image.tmdb.org/t/p/w1920" + json.results[number].backdrop_path;
				$(".contentImage").css("background-image","url(" + imageLink + ")");
				$scope.getMovieByID(json.results[number].id);
				
            },
            error: function(e) {
				alert("RÖV");
				alert("HEJ");
                console.log(e.message);
            }
    });
});

$scope.getVideos = function(videoId) {
	var url = 'https://api.themoviedb.org/3/movie/' + videoId + '/videos';
        key = '?api_key=33e53562fbe46873e9379ecef2545dbc';
        $.ajax({
            type: 'GET',
			url: url + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
				console.log(json);
				$scope.movieID = json.results[0].key;
				$scope.updatePop();
			},
            error: function(e) {
				alert("RÖV");
                console.log(e.message);
            }
    });
}

$scope.getMovieByID = function(userInp) {
var url = 'https://api.themoviedb.org/3/movie/';
        key = '?api_key=33e53562fbe46873e9379ecef2545dbc';
        $.ajax({
            type: 'GET',
            url: url + userInp + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                $scope.popInfo = json;
				$scope.datWidth = json.vote_average*10 + "%";
				$scope.getVideos(json.id);

            },
            error: function(e) {
                console.log(e.message);
            }
    });

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

var openMovie = 0;
$scope.openMovie = function() {
if(openMovie%2==0) {
//$("#youtubeHolder").animate({opacity: "1"});
$(".youtubeHolder").addClass("youtubeHolder showYoutube");
$(".moviePlayButton").addClass("moviePlayButton moviePlayButtonRotate");
$(".playLineOne").addClass("playLineOne playLineOnePause");
$(".playLineTwo").addClass("playLineTwo playLineTwoPause");
$(".playLineThree").addClass("playLineThree playLineThreePause");
$(".playArrow").addClass("playArrow playArrowPause");
$scope.setProject();
} else {
$(".youtubeHolder").removeClass("showYoutube");
}
openMovie++;
}

$scope.getList = function() {
	return Movie.getObjectlist();
	$scope.movieList = Movie.getObjectlist();

}

$scope.getSearchResults = function() {
var valu = $("#searchForm").val();
var url = 'https://api.themoviedb.org/3/search/movie?query=';
		userInp = valu;
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
                $scope.movies = json.results;
                console.log($scope.movies);
                $scope.updatePop();

            },
            error: function(e) {
                console.log(e.message);
            }
    });

}

$scope.checkEnter = function(keyEvent) {
  //if (keyEvent.which === 13)
    $scope.getSearchResults();
}

 
});
