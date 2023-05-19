import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import React, { useEffect } from 'react';
import NexusNova from "./pages/NexusNova";
import Thrud4Front from './pages/Thrud4Front';
import BlvckmenFashion from './pages/BlvckmenFashion';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    const setTitle = () => {
      document.title = getPageTitle();
    };
    const getPageTitle = () => {
      const currentPath = window.location.pathname;

      switch (currentPath) {
        case '/Thrud4Front':
          return 'Thrud4Front';
        case '/NexusNova':
          return 'NexusNova';
        case '/BlvckmenFashion':
          return 'BlvckmenFashion';
        default: 
          return 'BlvckNexxus';
      }
    };
    setTitle(); // Set the initial page title
  });

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
