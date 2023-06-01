import { Link } from "react-router-dom";
import React from "react";
import logo from "../logo.svg"
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to BlvckNexxus
        </p>
          <Link onClick={()=> {document.title="BlvckmenFashion"}} to="/BlvckmenFashion"> BlvckmenFashion </Link>
          <Link onClick={()=> {document.title="NexusNova"}}to="/NexusNova"> NexusNova </Link>
          <Link onClick={()=> {document.title="Thrud4Front"}}to="/Thrud4Front"> Thrud4Front </Link>
          <Footer />
    </div>
  )
};

export default Home;