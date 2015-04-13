movieDataApp.controller('StartCtrl', function ($scope,Movie) {

$scope.test = function() {
//var url = 'https://api.themoviedb.org/3/search/movie?query=';
var url = 'https://api.themoviedb.org/3/search/movie?query=';

		userInp = "superman";
        key = '&api_key=33e53562fbe46873e9379ecef2545dbc';
        $.ajax({
            type: 'GET',
            url: url + userInp + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
				alert("NÖJJS");
                console.dir(json);
            },
            error: function(e) {
				alert("RÖV");
                console.log(e.message);
            }
    });
}

 
});
