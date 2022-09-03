import { useEffect, useState } from 'react';
import './App.css';
import Login from "./components/Login/Login"
import { getTokenFromUrl } from "./components/spotify/Spotify"
function App() {
  const [token, setToken] = useState(null)
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;
    // temperory token 
    if (_token) {
      setToken(_token)
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
