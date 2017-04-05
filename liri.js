/*var twitKeys = require("keys.js");

var tConsumer= twitKeys.twitterKeys.consumer_key;
var tConsumerS= twitKeys.twitterKeys.consumer_secret;
var token= twitKeys.twitterKeys.access_token_key;
var tokenS= twitKeys.twitterKeys.access_token_secret;
*/

var spotify = require('spotify');
var request = require("request");

var nodeArgs= process.argv;

var songTitle="";
var movieName = "";


if (process.argv[2] === "spotify") {
	for (var i = 3; i < nodeArgs.length; i++) {
		songTitle = songTitle + " " + nodeArgs[i];
	}
 	console.log("Searching for" + songTitle);

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

if (process.argv[2]==="movie") {
	for (var i = 3; i < nodeArgs.length; i++) {
		movieName = movieName + " " + nodeArgs[i];
	}
 	console.log("Searching for" + movieName);
 	console.log("_____________________________");

 	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

 	request(queryUrl, function(error, response, body) {

	  // If the request is successful
	  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
    console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
    console.log(JSON.parse(body).Ratings);



  	  } 	
	});
};
