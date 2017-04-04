/*var twitKeys = require("keys.js");

var tConsumer= twitKeys.twitterKeys.consumer_key;
var tConsumerS= twitKeys.twitterKeys.consumer_secret;
var token= twitKeys.twitterKeys.access_token_key;
var tokenS= twitKeys.twitterKeys.access_token_secret;
*/

var spotify = require('spotify');

var nodeArgs= process.argv;

var songTitle="";

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


