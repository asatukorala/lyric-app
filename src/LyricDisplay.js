import React from 'react'

function LyricDisplay({ handleLyricDisplay, lyrics }) {
  return (
    <div className="LyricDisplay">
      <h1>Lyrics App</h1>
      <p>Artist</p>
      <input type="text" id="artist" />
      <p>Song Title</p>
      <input type="text" id="song-title"/>
      <button type="button" onClick={handleLyricDisplay}>Search</button>
      <p> {lyrics} </p>
    </div>
  )
}

// function getSongTitle() {
//   var songTitle = document.getElementById("song-title").value
// }

// function getArtist() {
//   var artist = document.getElementById("artist").value
// }

export default LyricDisplay