import React from 'react'
import './App.css';
import LyricDisplay from './LyricDisplay';
import env from "react-dotenv"
import { useState } from 'react';
// import fetch from 'node-fetch'
// import { useState, useEffect } from "react"
// import useFetch from "react-fetch-hook"

function App() {
  const [lyrics, setLyrics] = useState(null)
  const [trackID, setTrackID] = useState(null)

  // fetchTrackID = () => {
  //   fetch("http://api.musixmatch.com/ws/1.1/track.search?apikey=140e78b9724d3b447cc2cbee1a92bf2f&q_artist=toto&q_track=rosanna")
  //   .then((response) => response.json)
  //   .then(App => {
  //     this.setState({ trackID: App })
  //   })
  // }

  const handleLyricDisplay = event => {
   // const [lyrics, trackID] = React.useState(null)
    const newContent = event.target.value
    var songTitle = document.getElementById("song-title").value
    // var songTitle = document.newContent.getElementById("song-title").value
    var artist = document.getElementById("artist").value
    console.log(songTitle, artist)
    // const trackID = getTrackID(songTitle, artist)
    let res = fetch(`http://api.musixmatch.com/ws/1.1/track.search?apikey=${env.API_URL}&q_artist=${artist}&q_track=${songTitle}`)
      .then(res => res.json())
      .then(res => setTrackID(res['message']['body']['track_list'][0]['track']['track_id']))
// Pablo recommends separating the above section and using addVariable
    // const addVariable = () => {
    //   setTrackID([trackID])
    // }  



    
  }
  
  const handleGetLyrics = trackID => {
    const res = fetch(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${env.API_URL}&track_id=${trackID}`)
      .then(res => res.json())
      .then(res => {
        if (res['message']['header']['status_code'] === 200) {
          setLyrics(res['message']['body']['lyrics']['lyrics_body'])
        } 
  })
  }

    // console.log(trackID)
    if (trackID != null) {
      console.log(trackID)
      handleGetLyrics(trackID)
      if (lyrics === null) {
        setLyrics("Sorry. Lyrics are not available.")
      }
    } 
    // const { lyrics } = this.state.lyric
  return (
    <div className="App">
      <LyricDisplay 
        handleLyricDisplay={handleLyricDisplay}
        lyrics={lyrics}
      />
      <div>
        {trackID}
      </div>
    </div>
  )

}

// async function getTrackID(songTitle, artist) {
//   const key = env.API_URL
//   console.log(key)
//   const res = await fetch(`https://api.musixmatch.com/ws/1.1/track.search?apikey=key&q_artist=${artist}&q_track=${songTitle}`)
//     .then(res => res.json())
//   const trackID = res['message']['body']['track_list'][0]['track']['track_id']
//   return { trackID }
// }

// async function getlyrics(trackID) {
//   const res = await fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=env.API_URL&track_id=${trackID}`)
//     .then(res => res.json())
//   const lyrics = res['message']['body']['lyrics']['lyrics_body']
//   return { lyrics }
// }

export default App;
