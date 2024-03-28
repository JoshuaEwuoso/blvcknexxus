import { Link } from "react-router-dom";
import React from "react";
import logo from "../logo.svg"


const Home = () => {
  return (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to BlvckNexxus
          </p>
          <p>This is the hub where fashion, tech and news comes together</p>
      <div className="links">
        <Link onClick={()=> {document.title="BlvckmenFashion"}} to="/BlvckmenFashion"> BlvckmenFashion </Link>
        <Link onClick={()=> {document.title="SentientSys"}}to="/NexusNova"> SentientSys </Link>
        <Link onClick={()=> {document.title="Thrud4Front"}}to="/Thrud4Front"> Thrud4Front </Link>
      </div>       
    </div>
  )
};

export default Home;