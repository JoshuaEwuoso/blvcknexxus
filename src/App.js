import logo from './logo.svg';
import './App.css';
import React from 'react';
import NexusNova from './pages/NexusNova';
import Thrud4Front from './pages/Thrud4Front';
import BlvckmenFashion from './pages/BlvckmenFashion';

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
      <BlvckmenFashion />
      <NexusNova />
      <Thrud4Front />
    </div>
  );
}

export default App;
