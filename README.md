# Lyrics App

# :computer: [Click here](https://lyricsapp.surge.sh/) to see my live project!

# :information_source: About 
An app where users can search for song lyrics with the fields "Artist" and "Song Title". The user will also have the opportunity to search by "Song Phrase".

## High Level Design
The song title and artist is recieved from the handler handleLyricDisplay which is passed down to the handler handleGetLyrics that gets the lyrics. Both handlers are making fetch requests to the Musixmatch API. There is also the handler handleLyricPhrase for the user to search by phrases. 

## Technical Notes
Wireframes:
![Wireframes](https://i.imgur.com/9vT4beV.jpg)

Trello Board 25/10:
![TB2510](https://i.imgur.com/zaAP9rc.jpeg)

Trello Board 26/10:
![TB2610](https://i.imgur.com/2YBzRpT.jpeg)

Trello Board 27/10 Morning:
![TB2710Morning](https://i.imgur.com/Yel5pO6.jpg)

Trello Board 27/10 Night:

# :rocket: Cool tech
This front-end React app uses JavaScript, HTML and CSS.

# :anguished: Bugs to fix :
The first major stumbling block for me was was getting and passing the trackID variable from the first fetch request to the second fetch request. I was able to access the value I wanted in the console from the first fetch result, but couldn't pass it into the next fetch request. The solution was to change App.js from a class to a function and use setTrackID.  

Displaying the lyrics in a line by line way was very challenging. I tried using regular expressions for a long time which was not doing anything. I eventually found the solution in CSS.

CORS error.

# :persevere: Lessons learnt
Begun work on the CSS earlier. 

# :white_check_mark: Future features
- Use the Spotify API to display a Spotify embed of the song. 
- Get and display the artist and song title when user searches by phrase.
- Catch the TypeError and throw an exception. 
- Fix it getting broken after using it for a while.
- Fix artist and song title displaying as a lyric heading when it isn't a result.
