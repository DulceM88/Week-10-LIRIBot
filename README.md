# Week-10-LIRIBot 
## Description
LIRI bot is an application that can look up information on any movie or song and display your latest tweets.

## Requirements
utilize Git Bash CLI, node.js, and node packages to call and retrieve  information from omdb, twitter, and spotify API's,

## Technologies Used
- Git Bash command line interface
- node.js
- JavaScript loops and functions
- Node Package Managers; request, twitter,and spotify

## Code Explaination

For this application I began by creating an empty variable which would hold the user input from the command line:

	var nodeArgs= process.argv;

Next I created functions which would check the third argument from the command line and execute certain logic depending on what that argument is. For example: 

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
    	//console.log(data); };

The logic within the function contains a loop which checks the remaining arguments from the command line starting at the 3rd argument. This way songs or movies with multiple words in the title can be searched. Spotify is queried based on song title names and a callback function is executed. If an error is returned the function logs the error otherwise the function logs the data retrieved.