import React from "react";
import "./styles.css";

function Login() {
  return (
    <>
      <div className="container-log">
        <div className="login">
          <img src="https://visualpharm.com/assets/68/Checked%20User%20Male-595b40b65ba036ed117d3d98.svg" />
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
