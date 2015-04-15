movieDataApp.controller('StartCtrl', function ($scope,Movie,$sce) {
	
$scope.setProject = function () {
	var id = "https://www.youtube.com/embed/"+ $scope.movieID + "?autoplay=1&controls=0&showinfo=0";
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
				$scope.getVideos(json.id);

            },
            error: function(e) {
                console.log(e.message);
            }
    });

}

$scope.openSearch = function() {
$("#searchForm").animate({width: "200px"});
$("#searchForm").animate({margin: "10px 24px 0 0"});
}

$scope.openMovie = function() {
//$("#youtubeHolder").animate({opacity: "1"});
$(".youtubeHolder").addClass("youtubeHolder showYoutube");
$scope.setProject();
}
 
});
