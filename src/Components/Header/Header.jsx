import React, { useState } from "react";
import "./Header.css";
import Dropdown from "../Dropdown/Dropdown";
import profile from "../../Images/profile.png";

import { Link } from "react-router-dom";

const Header = ({ isLogin, showModalLogin, showModalRegister }) => {
  const [isProfileDropdown, setProfileDropdown] = useState(false);

  const showProfileDropdown = () => {
    setProfileDropdown(!isProfileDropdown);
  };

  return (
    <div className="App-header">
      <div className="Header">
        <Link to="/">
          <div className="header-left"></div>
        </Link>
        <div className="header-right">
          {!isLogin && (
            <div>
              <button className="btn-login" onClick={() => showModalLogin()}>
                Login
              </button>
              <button
                className="btn-register"
                onClick={() => showModalRegister()}
              >
                Register
              </button>
            </div>
          )}
          {isLogin && (
            <div className="profile-header">
              <img src={profile} alt="" onClick={() => showProfileDropdown()} />
            </div>
          )}
          {isProfileDropdown && (
            <Dropdown showProfileDropdown={showProfileDropdown} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
