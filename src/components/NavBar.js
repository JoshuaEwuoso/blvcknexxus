import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navigate">
      <Link to="/" id="startPage">
        <img 
          src="https://logos-download.com/wp-content/uploads/2019/01/Nexxus_Logo.png" 
          alt="BlvckNexxus" 
          width="150" 
          height="90" 
          className="logo">
        </img>
      </Link>
      <Link onClick={()=> {document.title="BlvckNexxus"}}to="/"> Home </Link>
      <Link onClick={()=> {document.title="About Page"}}to="/About">About</Link>
    </nav>
  );
};

export default NavBar;