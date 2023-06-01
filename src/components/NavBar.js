import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navigate">
      <Link onClick={()=> {document.title="BlvckNexxus"}}to="/">
        <img 
          src="https://logos-download.com/wp-content/uploads/2019/01/Nexxus_Logo.png" 
          alt="BlvckNexxus"
          className="site-logo">
        </img>
      </Link>
      <Link onClick={()=> {document.title="BlvckNexxus"}}to="/"> Home </Link>
      <Link onClick={()=> {document.title="About Page"}}to="/About">About</Link>
    </nav>
  );
};

export default NavBar;