import { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login/Login"
import { getTokenFromUrl } from "./components/spotify/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player/Player';
import { useStateValue } from "./StateProvider"
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;
    // temperory token 
    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token)//between react and spotify
      spotify.getMe().then(user => { // get my account cool :)
        console.log(":=", user)
        dispatch({
          type: "SET_USER",
          user: user,
        });
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1DWWvvyNmW9V9a').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })
    }
    console.log("i have a token", token)

  }, [token, dispatch])
  console.log(":*", token)
  console.log(":)", user)


  return (
    <div className="App">
      <div className="app">
        {!token && <Login />}
        {token && <Player spotify={spotify} />}
      </div>

    </div>
  );
}

export default App;
