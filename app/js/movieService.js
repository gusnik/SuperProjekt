
movieDataApp.factory('Movie',function ($resource) {


this.getMovieByStr = function(userinput) {
var objectList = [];
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
  return (objectList);
}



  return this;

});