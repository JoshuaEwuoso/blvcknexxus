import { Link } from "react-router-dom";
import React from "react";
import logo from "../logo.svg"

const Home = () => {
  return (
    // <Router> 
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to BlvckNexxus
        </p>
          <Link to="/BlvckmenFashion"> BlvckmenFashion </Link>
          <Link to="/NexusNova"> NexusNova </Link>
          <Link to="/Thrud4Front"> Thrud4Front </Link>
    </header>
// </Router>
  )
};

export default Home;