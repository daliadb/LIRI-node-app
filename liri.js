// Requires
//Dotenv
require("dotenv").config();
// Import Key.js File
var keys = require("keys.js");
// Request
var request = require("request");
// Read & Write
var fs = require("fs");
// Twitter
var twitter = require('twitter');
// Spotify
var spotify = require('node-spotify-api');


// Action & User Input
var action = process.argv[2];
var userInput = process.argv[3];
//needs a forloop to grab all info after action
// Would look something like this:
for (var i = 3; i < userInput.length; i++) {
    userInput[i];
}

// Switch-case Statement
switch (action) {
    case "my-tweets":
        tweets();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        random();
        break;
}


// 'my-tweets' Function
function tweets() {
    var client = new Twitter(keys.twitter);

    //Call & print last 20 tweets
    client.get('statuses/list', function(error, tweets, response) {
        if (error) throw error;
        console.log(tweets); // The favorites. 
        console.log(response); // Raw response object. 
    });
}


// `spotify-this-song` Function
function spotify() {
    var spotify = new Spotify(keys.spotify);
    var typedSong = ""; // userInput variable length

    // If Else Statment
    if (song is entered) {

        spotify.search({ type: 'track', query: typedSong }, function(err, body) {

            // If request is successful
            if (!error && response.statusCode === 200) {

                // Parse the body of the site and recover needed information
                console.log("Artist: " + JSON.parse(body).Artist +
                    "\nSong Title: " + JSON.parse(body).Title +
                    "\nAlbum: " + JSON.parse(body).Album +
                    "\nPreview: " + JSON.parse(body).queryURL);
            }
        });

    } else {
        //Print default: "The Sign" by Ace of Base	
        spotify.search({ type: 'track', query: 'The Sign', artist: 'Ace of Base' }, function(err, body) {

            // If request is successful
            if (!error && response.statusCode === 200) {

                // Parse the body of the site and recover needed information
                console.log("Artist: " + JSON.parse(body).Artist +
                    "\nSong Title: " + JSON.parse(body).Title +
                    "\nAlbum: " + JSON.parse(body).Album +
                    "\nPreview: " + JSON.parse(body).queryURL);
            }
        });
    }
}


// `movie-this` Function
function movie() {
    // Creation of movie variable using global var for [3]+
    var movieName = userInput;

    // If Else Statment
    if (movie is entered) {

        // OMDB API Movie API
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        request(queryUrl, function(error, response, body) {

            // If request is successful
            if (!error && response.statusCode === 200) {

                // Parse the body of the site and recover needed information
                console.log("Title: " + JSON.parse(body).Title +
                    "\nRelease Year: " + JSON.parse(body).Year +
                    "\nIMDB Rating: " + JSON.parse(body).imdbRating +
                    "\nRotten Tomatoes Score: " + JSON.parse(body).rottentomatoesRating +
                    "\nCountry of Production: " + JSON.parse(body).Country +
                    "\nLanguage: " + JSON.parse(body).Language +
                    "\nPlot: " + JSON.parse(body).Plot +
                    "\nMain Actors: " + JSON.parse(body).Actors);
            }
        });

    } else {
        // Mr. Nobody Data
        var movieDefault = "Mr. Nobody";
        var queryUrl = "http://www.omdbapi.com/?t=" + movieDefault + "&y=&plot=short&apikey=trilogy";

        request(queryUrl, function(error, response, body) {

            // If request is successful
            if (!error && response.statusCode === 200) {

                // Parse the body of the site and recover needed information
                console.log("Title: " + JSON.parse(body).Title +
                    "\nRelease Year: " + JSON.parse(body).Year +
                    "\nIMDB Rating: " + JSON.parse(body).imdbRating +
                    "\nRotten Tomatoes Score: " + JSON.parse(body).rottentomatoesRating +
                    "\nCountry of Production: " + JSON.parse(body).Country +
                    "\nLanguage: " + JSON.parse(body).Language +
                    "\nPlot: " + JSON.parse(body).Plot +
                    "\nMain Actors: " + JSON.parse(body).Actors);
            }
        });
    }
};


// `do-what-it-says`Function
function random() {

    //Read info from text file
    fs.readFile("random.txt", "utf8", function(err, data) {
		if (err) {
		  return console.log(err);
		}

		//Split information in file
		data.split(",");
	}

	//Call listed command + input
	action();

};

// *Bonus* Log.txt
var logFile = require("log.txt");
var logData = action + userInput;

fs.appendFile(logFile, logData, function(err) {
	
	if (err) {
	  console.log(err);

	} else {
	  console.log("Content Added!");

    }
    
});