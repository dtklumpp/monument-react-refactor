import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing.js';
// import Blog from './components/Blog';
// import logo2 from './logo192.png';

function App() {
  return (
    <div className="App">
      {/* <h1>placeholder here</h1>
      <img src="/logo192.png" alt="image" /> */}

      {/* <img src={process.env.PUBLIC_URL + '/logo192.png'}></img>
      <img src={window.location.origin + '/logo512.png'}></img>
      <img src={logo}></img> */}

      <Landing />
      {/* <Blog /> */}
    </div>
  );
}

export default App;
