// search srction

function searchForSong() {
  const searchText = document.getElementById("search-bar").value;

  const apiUrl = `https://api.lyrics.ovh/suggest/${searchText}`;

  console.log(apiUrl)

  // loading data 
   
  fetch(apiUrl)
  .then(res => res.json())
  .then(data => displaySongs(data.data))

}

const displaySongs = songs =>{
    const songContain = document.getElementById('song-container');
    songContain.innerHTML = '';

    // looping through songs 

    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
            
        // each song 
        
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `;

        songContain.appendChild(songDiv);
    });
}


// get Lyrics func 

const getLyric = async (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayLyrics(data.lyrics);
    }
    catch (error) {
        displayError('Sorry! I failed to load lyrics, Please try again later!!!')
    }
}


const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerText = lyrics;
}

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}