movieDataApp.controller('StartCtrl', function ($scope,Movie,$sce) {


    angular.element(document).ready(function () {
        var dateList = [];
        for(var x=0; x<7;x++) {
            var someDate = new Date();
            var numberOfDaysToAdd = x;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
            var dd = someDate.getDate();
            var mm = ("0" + (someDate.getMonth() + 1)).slice(-2)
            var y = someDate.getFullYear();
            var someFormattedDate = y + '-'+ mm + '-'+ dd;
            dateList.push(someFormattedDate);
        } 
        $scope.date = dateList;
    });
    	
    $scope.setProject = function () {
    	var id = "https://www.youtube.com/embed/"+ $scope.movieID + "?autoplay=1&controls=0&showinfo=0&rel=0";
    	//$scope.currentProject = $scope.projects[id];
    	$scope.currentProjectUrl = $sce.trustAsResourceUrl(id);
    }

    $scope.updatePop = function() {
         if(!$scope.$$phase) {
                 $scope.$apply();

        }
    }

    angular.element(document).ready(function() {
        Movie.getMovies.getPopular(function(data){
        imageLink = "https://image.tmdb.org/t/p/w1920" + data.results[0].backdrop_path;
        $(".contentImage").css("background-image","url(" + imageLink + ")");

        $scope.getMovieByID(data.results[0].id);
         $scope.status = "Showing " + data + " results";
       },function(data){
         $scope.status = "There was an error";
    });
    });


    $scope.getMovieByID = function(userInp) {
        Movie.getMovies.getMovieID({query:userInp}, function(data){
        $scope.popInfo = data;
        $scope.datWidth = data.vote_average*10 + "%";
        $scope.getVideos(data.id);

         $scope.status = "Showing " + data + " results";
       },function(data){
         $scope.status = "There was an error";
    });
    }

    $scope.getVideos = function(videoId) {
        Movie.getMovies.getVideos({query:videoId}, function(data){
             $scope.movieID = data.results[0].key;
            $scope.updatePop();
            },function(data){
         $scope.status = "There was an error";
    });
    }

    $scope.getSearchResults = function() {
        var valu = $("#searchForm").val();
        Movie.getMovies.getSearch({query:valu}, function(data){
            $scope.movies = data.results;
            $scope.updatePop();
            },function(data){
         $scope.status = "There was an error";
    });
    }

    angular.element(document).ready(function() {
        Movie.getMovies.getPopular(function(data){
            var topTenList = [];
            for(var x=0; x<5;x++) {
            topTenList.push(data.results[x]);
            }
            console.log(topTenList);
            $scope.topTenList = topTenList;

         $scope.status = "Showing " + data + " results";
       },function(data){
         $scope.status = "There was an error";
    });
    });


angular.element(document).ready(function() {
    var dating = $scope.date[0];
    Movie.getMovies.getDatee({query:dating}, function(data){
        console.log("HJK")
        console.log(data);
            var comingSoonList = [];
            for(var x=0; x<5;x++) {
            comingSoonList.push(data.results[x]);
            }
            console.log(comingSoonList);
            $scope.comingSoonList = comingSoonList;
     $scope.status = "Showing " + data + " results";
   },function(data){
     $scope.status = "There was an error";
});
});


    $scope.checkEnter = function(keyEvent) {
      //if (keyEvent.which === 13)
        $scope.getSearchResults();
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

 

});

