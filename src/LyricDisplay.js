import React from 'react'
import './LyricDisplay.css'

function LyricDisplay({ handleLyricDisplay, handleLyricPhrase, songTitle, artist, lyrics }) {
  return (
    <div className="LyricDisplay">
      <h1>Lyrics App</h1>
      <div className="input-box"> 
      <p className="form">Artist: </p>
      <input type="text" id="artist" />
      <p>Song Title</p>
      <input type="text" id="song-title"/>
      <button type="button" onClick={handleLyricDisplay}>Search</button>
      <p>Song Phrase</p>
      <input type="text" id="song-phrase"/>
      <button type="button" onClick={handleLyricPhrase}>Search by Phrase</button>
      </div>
      <div className="lyric-grid">      
      <div><b>{songTitle} {artist}</b> </div>
      {/* <div className="details">
        
      </div> */}
      <div className="lyrics"> 
        {lyrics} 
      </div>
      <div> </div>
      </div>
    </div>
  )
}

export default LyricDisplay