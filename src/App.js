import React from 'react';
import logo from './logo.svg';
import './App.css';

import Place from './components/Place';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <Place />
        <br />
        <User />
      </header>
    </div>
  );
}

export default App;
