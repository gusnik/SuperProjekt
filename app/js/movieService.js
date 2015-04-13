
movieDataApp.factory('Movie',function ($resource) {
var objectList = [];


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
	console.log(objectList);
	return objectList;
}



  return this;

});