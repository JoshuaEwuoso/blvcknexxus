import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navigate">
      <Link onClick={()=> {document.title="BlvckNexxus"}}to="/">
        <img
          src="/newnexus.png"
          alt="BlvckNexxus"
          className="site-logo"
        />
      </Link>
      <div className="button-wrapper">
        <Link className="home-button" onClick={()=> {document.title="BlvckNexxus"}}to="/">Home</Link>
        <Link className="about-button" onClick={()=> {document.title="BlvckNexxus | About Page"}}to="/About">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;