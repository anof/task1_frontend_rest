import React from 'react';
import './App.css';
import axios from 'axios'



class App extends React.Component {

  componentDidMount() {
    this.getData()
  }

  setMusicData(response)
  {
    let albums = response.albums.split(',');
    let artists = response.artists.split(',');
    let songs = response.songs.split(',');

    let albumsElement = document.getElementById('albums');
    let artistsElement = document.getElementById('artists');
    let songsElement = document.getElementById('songs');


    albums.forEach(album => {
      let temp = document.createElement('li');
      temp.innerHTML = "<li>" + album + "</li>";
      albumsElement.appendChild(temp)        
    });
        
    
    artists.forEach(artist => {
      let temp = document.createElement('li');
      temp.innerHTML = "<li>" + artist + "</li>";
      artistsElement.appendChild(temp)        
    });

    songs.forEach(song => {
      let temp = document.createElement('li');
      temp.innerHTML = "<li>" + song + "</li>";
      songsElement.appendChild(temp)        
    });
  }

  getData(){
      axios.get("http://localhost:8000/api/music").then((response)=>{
        this.setMusicData(response.data[0]);
        
      }).catch((error)=>{
        console.log(error)
        document.getElementById('header').innerHTML="Api not answering"
      });

    
  };

  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Albums
              <ul id="albums">

              </ul>
          </div>
          <div>
            Artists
              <ul id="artists">
                  
              </ul>
          </div>
          <div>
            Songs
              <ul id="songs">
          
              </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
