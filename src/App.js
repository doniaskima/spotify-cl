import { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login/Login"
import { getTokenFromUrl } from "./components/spotify/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player/Player';

const spotify = new SpotifyWebApi()
function App() {
  const [token, setToken] = useState(null)
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;
    // temperory token 
    if (_token) {
      setToken(_token); 
      spotify.setAccessToken(_token)//between react and spotify
      spotify.getMe().then(user => { // get my account cool :)
        console.log("fucking", user)
      })
    }
  }, [])
  return (

    <div className="App">
      {token ? <Player/> : (
        <Login />
      )}
    </div>
  );
}

export default App;
