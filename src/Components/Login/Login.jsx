import React from "react";
import "./Login.css";

function Login() {
  return (
    <div classname="ModalLogin">
      <h1>Login</h1>
      <div>
        <div>
          <h4>Email</h4>
          <input type="text" />
        </div>
        <div>
          <h4>Password</h4>
          <input type="password" />
        </div>
        <div>
          <button>Login</button>
          <p>Don't have an account? Klik Heew</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
