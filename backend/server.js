const express = require('express');
const cors = require('cors');
let fetch = require('node-fetch');

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

const requestEndpoint = "https://xkcd.com/325/info.0.json";
//let lyricsEndpoint = `https://api.musixmatch.com/ws/1.1/track.search?apikey=${key}&q_artist=${artist}&q_track=${songTitle}`
//const res = fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${process.env.REACT_APP_API_URL}&track_id=${trackID}`
// let res = fetch(`https://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_URL}&q_lyrics=${songPhrase}`)

app.get('/getLyricID/:artist/:song/:apiKey', cors(corsOptions), async (req, res) => {
    const artist = req.params.artist;  
    const song = req.params.song;   
    const apiKey = req.params.apiKey;  
    let lyricsEndpoint2 = `https://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&q_artist=${artist}&q_track=${song}`
    console.log (artist)
    console.log (song)   
    const fetchOptions = {
        method: 'GET'
    }
   // const response = await fetch(requestEndpoint, fetchOptions);
    const response = await fetch(lyricsEndpoint2, fetchOptions);    
    const jsonResponse = await response.json();
    res.json(jsonResponse)
});

app.get('/getLyrics/:lyricID/:apiKey', cors(corsOptions), async (req, res) => {
    const lyricID = req.params.lyricID;  
    const apiKey = req.params.apiKey;    
    let lyricsEndpoint2 = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${apiKey}&track_id=${lyricID}`
    console.log (lyricID)  
    //console.log (lyricsEndpoint2)
    const fetchOptions = {
        method: 'GET'
    }
   // const response = await fetch(requestEndpoint, fetchOptions);
    const response = await fetch(lyricsEndpoint2, fetchOptions);    
    const jsonResponse = await response.json();
    res.json(jsonResponse)
});

app.get('/getLyricSearch/:songPhrase/:apiKey', cors(corsOptions), async (req, res) => {
    const songPhrase = req.params.songPhrase;    
    const apiKey = req.params.apiKey;    
    let lyricsEndpoint2 = `https://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&q_lyrics=${songPhrase}`
    console.log (songPhrase)  
    //console.log(apiKey)
    //console.log (lyricsEndpoint2)
    const fetchOptions = {
        method: 'GET'
    }
   // const response = await fetch(requestEndpoint, fetchOptions);
    const response = await fetch(lyricsEndpoint2, fetchOptions);    
    const jsonResponse = await response.json();
    //console.log(jsonResponse)
    res.json(jsonResponse)
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});