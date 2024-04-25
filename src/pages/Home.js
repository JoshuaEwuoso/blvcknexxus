import { Link } from "react-router-dom";
import React from "react";


const Home = () => {
  return (
    <div className="App-header">
      <p>Welcome to BlvckNexxus!</p>
      <p>This is the hub where Fashion, Tech and News come together</p>
        <div className="links">
          <p>
            <Link onClick={()=> {document.title="BlvckmenFashion"}} to="/BlvckmenFashion">
              <img src="/blvckmenfashionlogo.png" alt="BlvckmenFashion" />
            </Link>
          </p>
          <p>
            <Link onClick={()=> {document.title="SentientSys"}} to="/SentientSys">
              <img src="/sentientsyslogo.png" alt="SentientSys" />
            </Link>
          </p>
          <p>
            <Link onClick={()=> {document.title="Thrud4Front"}} to="/Thrud4Front">
              <img src="/forefronttvlogo.png" alt="Thrud4Front" />
            </Link>
          </p>
      </div>
    </div>
  );
};

export default Home;