import { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login/Login"
import { getTokenFromUrl } from "./components/spotify/Spotify";
import SpotifyWebApi from "spotify-web-api-js";

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
      spotify.getMe().then(user => {
        console.log("fucking", user)
      })
    }
  }, [])
  return (

    <div className="App">
      {token ? (<h1>I am Logged in </h1>) : (
        <Login />
      )}
    </div>
  );
}

export default App;
