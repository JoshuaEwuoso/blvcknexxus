import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navigate">
      <Link onClick={()=> {document.title="BlvckNexxus"}}to="/">
        <img 
          //src="https://logos-download.com/wp-content/uploads/2019/01/Nexxus_Logo.png"
          //src="https://www.dutchgrown.com/cdn/shop/products/LilyStarGazer.jpg?v=1668676765"
          src="/bignexuslogo.png"
          alt="BlvckNexxus"
          className="site-logo">
        </img>
      </Link>
      <Link className="home-button" onClick={()=> {document.title="BlvckNexxus"}}to="/">Home</Link>
      <Link className="about-button" onClick={()=> {document.title="BlvckNexxus | About Page"}}to="/About">About</Link>
    </nav>
  );
};

export default NavBar;