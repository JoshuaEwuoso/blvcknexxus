import { Link } from "react-router-dom";
import React from "react";
import logo from "../logo.svg"

const Home = () => {
  return (
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
                Welcome to BlvckNexxus
              </a>
              <Link to="/BlvckmenFashion"> BlvckmenFashion </Link>
              <Link to="/NexusNova"> NexusNova </Link>
              <Link to="/Thrud4Front"> Thrud4Front </Link>
            </header>
        )
};

export default Home;