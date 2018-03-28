# LIRI-node-app
LIRI project

## Commands
1. `node liri.js my-tweets`
2. `node liri.js spotify-this-song '<song name here>'`
3. `node liri.js movie-this '<movie name here>'`
4. `node liri.js do-what-it-says`

## What They Do
1. `node liri.js my-tweets`

	* LIRI will show the last 20 tweets (plus their creation date) from a fake Twitter account.

2. `node liri.js spotify-this-song '<song name here>'`

	* LIRI will give you the artist(s), song name, album, and a preview link from Spotify. If nothing is typed, the default is "The Sign" by Ace of Base.

3. `node liri.js movie-this '<movie name here>'`

	* LIRI will give you the title, release year, ratings (IMDB & Rotten Tomatoes), country it was produced in, language, plot, and main actors. If nothing is typed, the default is 'Mr. Nobody.'

4. `node liri.js do-what-it-says`
	
	* LIRI takes content of random.txt, then use it to call a command.


### BONUS
* Logged data is stored in `log.txt`.