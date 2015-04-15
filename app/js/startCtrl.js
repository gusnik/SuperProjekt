movieDataApp.controller('StartCtrl', function ($scope,Movie) {

$scope.updatePop = function() {
	 $scope.$apply();
}

angular.element(document).ready(function () {
	var url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&append_to_response=trailers';
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
				console.log(json);
				imageLink = "https://image.tmdb.org/t/p/w1920" + json.results[0].backdrop_path;
				$(".contentImage").css("background-image","url(" + imageLink + ")");
				
				$scope.getVideos(json.results[0].id);
				$scope.popInfo = json.results[0];
				console.log("hej");
                console.log($scope.popInfo);
                $scope.updatePop();
				
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
				$scope.videoInfo = json.results[0];
				$scope.updatePop();
			},
            error: function(e) {
				alert("RÖV");
                console.log(e.message);
            }
    });
}

$scope.openSearch = function() {
$("#searchForm").animate({width: "200px"});
$("#searchForm").animate({margin: "10px 24px 0 0"});
}
 
});
