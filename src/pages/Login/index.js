import React from "react";
import "./styles.css";

function Login() {
  return (
    <>
      <div className="container-log">
        <div className="login">
          <img src="images/avatar.png" />
          <div className="input-cnt">
            <h1>LOGIN</h1>
            <input placeholder="Username"></input>
            <input placeholder="Password" type="password"></input>
            <button className="btn">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
