import React from 'react'
import './LyricDisplay.css'

function LyricDisplay({ handleLyricDisplay, lyrics }) {
  return (
    <div className="LyricDisplay">
      <h1>Lyrics App</h1>
      <p>Artist</p>
      <input type="text" id="artist" />
      <p>Song Title</p>
      <input type="text" id="song-title"/>
      <button type="button" onClick={handleLyricDisplay}>Search</button>
      <div className="lyrics"> 
        {lyrics} 
      </div>
    </div>
  )
}

export default LyricDisplay