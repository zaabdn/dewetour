import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="App-jumbotron">
      <div className="header-title">
        <h1 className="text-header">Explore</h1>
        <h1 className="text-title">your amazing city together</h1>
      </div>
      <div className="header-search">
        <p>Find great places to holliday</p>
        <input type="text" className="input-search" />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
};

export default Jumbotron;
