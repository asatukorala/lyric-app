# Lyrics App

# :computer: [Click here](https://lyrics_app.surge.sh/) to see my live project!

# :information_source: About 
An app where users can search for song lyrics with the fields "Artist" and "Song Title". The user will also have the opportunity to search by "Song Phrase".

Screenshot:
![Screenshot](https://i.imgur.com/hNSaIiw.jpg)

## High Level Design
The song title and artist is recieved from the handler handleLyricDisplay which is passed down to the handler handleGetLyrics that gets the lyrics. Both handlers are making fetch requests to the Musixmatch API. There is also the handler handleLyricPhrase for the user to search by phrases. 

## Technical Notes
There is a limit of 1000 API requests per day. 

Wireframe of the App layout:
![Wireframes](https://i.imgur.com/9vT4beV.jpg)

Trello Board 25/10:
![TB2510](https://i.imgur.com/zaAP9rc.jpeg)

Trello Board 26/10:
![TB2610](https://i.imgur.com/2YBzRpT.jpeg)

Trello Board 27/10 Morning:
![TB2710Morning](https://i.imgur.com/Yel5pO6.jpg)

Trello Board 27/10 Night:
![TB2710Night](https://i.imgur.com/eUTQ4iL.jpg)

# :rocket: Cool tech
This front-end React app uses JavaScript, HTML and CSS.

# :anguished: Bugs to fix :
The first major stumbling block for me was getting and passing the trackID state variable from the first fetch request to the second fetch request. I was able to access the value I wanted in the console from the first fetch result, but couldn't pass it into the next fetch request. The solution was to change App.js from a class to a function and use setTrackID.  

Displaying the lyrics in a line by line way was very challenging. I tried using regular expressions for a long time which was not doing anything. I eventually found the solution in CSS.

I encountered a CORS error. To get around it, I probably need to implement an Express back end server to route the requests to the Musixmatch API. However, due to lack of time, I decided to use the browser extension "Moesif CORS" as a fix during the demo. 

# :persevere: Lessons learnt
If I had understood the CORS error earlier, I would have been able to fix it in time. 

# :white_check_mark: Future features
- Use the Spotify API to display a Spotify embed of the song. 
- Get and display the artist and song title when user searches by phrase.
- Catch errors and throw an exception to make the code more robust. 
- More extensive beta testing may be needed before deployment.