import React from "react";
import "./Header.css";
import Jumbotron from "../Jumbotron/Jumbotron";
// import { Link } from "react-router-dom";

const Header = ({ showModalLogin, showModalRegister }) => {
  return (
    <div className="App-header">
      <div className="Header">
        <div className="header-left"></div>
        <div className="header-right">
          <button
            className="btn-login"
            onClick={() => {
              showModalLogin();
            }}
          >
            Login
          </button>
          <button className="btn-register" onClick={() => showModalRegister()}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
