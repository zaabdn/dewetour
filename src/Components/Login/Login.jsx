import React from "react";
import "./Login.css";
import palm from "../../Images/palm1.png";
import hibiscus from "../../Images/hibiscus1.png";

const Login = ({ showModalLogin, closeModalLogin, handleLogin }) => {
  return (
    <div className="App-login">
      <div
        className="modal"
        onClick={() => {
          closeModalLogin();
        }}
      >
        <div className="modal-content">
          <img src={palm} alt="Footer" align="left" width="150px" />
          <img src={hibiscus} alt="Footer" align="right" width="70px" />
          <h1 style={{ position: "absolute", left: "47%" }}>LOGIN</h1>
          <div className="input-text">
            <div className="login-group">
              <h3>Email</h3>
              <input type="text" className="custom-input" />
            </div>
            <div className="login-group">
              <h3>Password</h3>
              <input type="password" className="custom-input" />
            </div>
            <div className="login-group" style={{ marginTop: "50px" }}>
              <button className="button" onClick={() => handleLogin()}>
                Login
              </button>
            </div>
          </div>
          <p align="center">
            Don't have an account ? Klik
            <span style={{ fontWeight: "900", cursor: "pointer" }}>Here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
