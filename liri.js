/*var client = require("./keys.js");

var tConsumer= client.twitterKeys.consumer_key;
var tConsumerS= client.twitterKeys.consumer_secret;
var token= client.twitterKeys.access_token_key;
var tokenS= client.twitterKeys.access_token_secret;
*/

// reqire these npm packages
var spotify = require('spotify');
var request = require("request");

//variable that stores user input from command line
var nodeArgs= process.argv;
//variables set to empty strings in order to capture user input
var songTitle="";
var movieName = "";

//logic for spotify command
if (process.argv[2] === "spotify-this-song") {
	//loops through user input starting at third item skipping node,filename, and "spotify-this"
	for (var i = 3; i < nodeArgs.length; i++) {
		songTitle = songTitle + " " + nodeArgs[i];
	}
 	console.log("Searching for" + songTitle);
 	//call to api
	spotify.search({ type: 'track', query: songTitle }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {
    	//console.log(data);
    	var trackInfo = data.tracks.items[0];
    	
    	console.log(trackInfo.artists[0].name)
        console.log(trackInfo.name)
        console.log(trackInfo.album.name)
        console.log(trackInfo.preview_url);
        console.log("_____________________________");
    	

      };		
 
   
	});

}
	//movie-this logic
	if (process.argv[2]==="movie-this") {
	for (var i = 3; i < nodeArgs.length; i++) {
		movieName = movieName + " " + nodeArgs[i];
	}
 	console.log("Searching for" + movieName);
 	console.log("_____________________________");
 	//query to omdb api which concatinates the url with the variable
 	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
 	//call to api via the request package
 	request(queryUrl, function(error, response, body) {

	  // If the request is successful
	  if (!error && response.statusCode === 200) {

   
    // parses through the returned JSON metadata and retrieves the desired information 
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
    console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
    

  	  } 	
	});
};
//unfinished logic for do what it says command
/*else if (process.argv[2]==="do-what-it-says"){

}*/
 //broken logic for displaying tweets
 /*if (process.argv[2] === "my-tweets"){
	var params = {screen_name: 'theduldina'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
    console.log(tweets);
  }
});
}
*/