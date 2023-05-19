import logo from './logo.svg';
import './App.css';
import React from 'react';
import blvckMenFashion from './pages/blvckmenfashion';
import nexusNova from './pages/nexusNova';
import thruD4Front from './pages/thrud4front';

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
          href="https://blvcknexxus.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          BlvckNexxus
        </a>
      </header>
      <blvckMenFashion />
      <nexusNova />
      <thruD4Front />
    </div>
  );
}

export default App;
