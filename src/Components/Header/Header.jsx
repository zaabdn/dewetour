import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="App-header">
      <div className="Header">
        <div className="header-left"></div>
        <div className="header-right">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
      <div class="header-title">
        <h1 class="text-header">Explore</h1>
        <h1 className="text-title">your amazing city together</h1>
      </div>
      <div className="header-search">
        <p>Find great places to holliday</p>
        <input type="text" className="input-search" />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
}

export default Header;
