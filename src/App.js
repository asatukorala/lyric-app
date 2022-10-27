import React from 'react'
import './App.css';
import LyricDisplay from './LyricDisplay';
import env from "react-dotenv"
import { useState } from 'react';
//import Songs from './songs';
// import { useState, useEffect } from "react"

function App() {
  const [artist, setArtist] = useState(null)
  const [songTitle, setSongTitle] = useState(null)
  const [restricted, setRestricted] = useState(0)
  const [lyrics, setLyrics] = useState(null)
  const [trackID, setTrackID] = useState(null)
  const [renderList, setRenderList] = useState(null)

  const handleLyricPhrase = event => {
     const newContent = event.target.value
     var songPhrase = document.getElementById("song-phrase").value
     console.log(songPhrase)  
     setArtist("")
     setSongTitle("")
     let res = fetch(`https://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_URL}&q_lyrics=${songPhrase}`)

    //  , {
    //    mode: 'no-cors',
    //    headers: {
    //      'Access-Control-Allow-Origin':'*'
    //    }
    //  })
       .then(res => res.json())
       .then(res => setTrackID(res['message']['body']['track_list'][0]['track']['track_id']))
   }
  
  const handleLyricDisplay = event => {
    const newContent = event.target.value
    var songTitle = document.getElementById("song-title").value
    var artist = document.getElementById("artist").value
    console.log(songTitle, artist)
    setArtist(artist)
    setSongTitle(songTitle + " by")
    fetch(`https://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_URL}&q_artist=${artist}&q_track=${songTitle}`)
    // , {
    //   mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin':'*'
    //   }
    // }
    // )
      .then(res => res.json())
      .then(res => setTrackID(res['message']['body']['track_list'][0]['track']['track_id']))
      .then(res => setRestricted(res['message']['body']['track_list'][0]['track']['restricted']))
  }
  
  const handleGetLyrics = (trackID) => {
    const res = fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${process.env.REACT_APP_API_URL}&track_id=${trackID}`)
    // , {
    //   mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin':'*'
    //   }
    // })
      .then(res => res.json())
      .then(res => {
        if (res['message']['header']['status_code'] === 200) {
          setLyrics(res['message']['body']['lyrics']['lyrics_body'])
        } 
  })
  }

  if (trackID != null) {
    console.log(trackID)
    handleGetLyrics(trackID)
    if (lyrics === null || restricted != 0) {
      setLyrics("Sorry. Lyrics are not available.")
    } 
  }

  // console.log(lyrics)

  return (
    <div className="App">
      <LyricDisplay 
        handleLyricDisplay={handleLyricDisplay}
        handleLyricPhrase={handleLyricPhrase}
        artist={artist}
        songTitle={songTitle}
        lyrics={lyrics}
      />
    </div>
  )
}

export default App;
