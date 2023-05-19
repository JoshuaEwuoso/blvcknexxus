import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import React from 'react';
import NexusNova from './pages/NexusNova';
import Thrud4Front from './pages/Thrud4Front';
import BlvckmenFashion from './pages/BlvckmenFashion';
import Home from './pages/Home';

function App() {
  return (
    <Router> 
      <div className="App">
        <div>
          <Routes> 
            <Route exact path="/" element={<Home />} />
            <Route path="/BlvckmenFashion" element={<BlvckmenFashion />} />
            <Route path="/NexusNova" element={<NexusNova />} />
            <Route path="/Thrud4Front" element={<Thrud4Front />} />
          </Routes> 
        </div>
      </div>
    </Router> 
  );
}

export default App;
