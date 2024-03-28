import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import Home from './pages/Home';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SentientSys from "./pages/SentientSys";
import Thrud4Front from "./pages/Thrud4Front";
import BlvckmenFashion from "./pages/BlvckmenFashion";
import About from "./pages/About";

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
        case '/SentientSys':
          return 'SentientSys';
        case '/BlvckmenFashion':
          return 'BlvckmenFashion';
        default: 
          return 'BlvckNexxus';
      }
    };
    setTitle();
  });

  return (
    <Router> 
      <div className="App">
        <NavBar />
          <Routes> 
            <Route exact path="/" element={<Home />} />
            <Route path="/BlvckmenFashion" element={<BlvckmenFashion />} />
            <Route path="/SentientSys" element={<SentientSys />} />
            <Route path="/Thrud4Front" element={<Thrud4Front />} />
            <Route path="/About" element={<About />} />
          </Routes>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
