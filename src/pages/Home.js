import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="App-header">
        <p className="welcome">Welcome to BlvckNexxus!</p>
        <p className="descript">This is the hub where Fashion, Tech, and News come together</p>
      </div>
      <div className="links">
        <p>
          <Link onClick={()=> {document.title="BlvckmenFashion"}} to="/BlvckmenFashion">
            <img src="/blvckmenfashion.png" alt="BlvckmenFashion" />
          </Link>
        </p>
        <p>
          <Link onClick={()=> {document.title="SentientSys"}} to="/SentientSys">
            <img src="/sentientsys.png" alt="SentientSys" />
          </Link>
        </p>
        <p>
          <Link onClick={()=> {document.title="Thrud4Front"}} to="/Thrud4Front">
            <img src="/forefrontnew.png" alt="Thrud4Front" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;