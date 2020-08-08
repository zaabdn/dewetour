import React from "react";
import "./Register.css";
import palm from "../../Images/palm1.png";
import hibiscus from "../../Images/hibiscus1.png";

const Register = ({ showModalLogin, closeModalRegister }) => {
  return (
    <div className="App-login">
      <div
        className="modal"
        onClick={() => {
          closeModalRegister();
        }}
        style={{ paddingTop: "20px" }}
      >
        <div className="modal-content">
          <img src={palm} alt="Footer" align="left" width="150px" />
          <img src={hibiscus} alt="Footer" align="right" width="70px" />
          <h1 style={{ position: "absolute", left: "45%" }}>REGISTER</h1>
          <div className="input-text">
            <div className="form-group">
              <h3>Full Name</h3>
              <input type="text" className="custom-input" />
            </div>
            <div className="form-group">
              <h3>Email</h3>
              <input type="text" className="custom-input" />
            </div>
            <div className="form-group">
              <h3>Password</h3>
              <input type="password" className="custom-input" />
            </div>
            <div className="form-group">
              <h3>Phone</h3>
              <input type="number" className="custom-input" />
            </div>
            <div className="form-group">
              <h3>Address</h3>
              <textarea className="custom-input" rows="8"></textarea>
            </div>
            <div className="form-group" style={{ marginTop: "50px" }}>
              <button className="button">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
