import React from "react";
import "./styles.css";

function Register() {
  return (
    <>
      <div className="container-log">
        <div className="login">
          <img src="https://visualpharm.com/assets/107/User%20Menu%20Female-595b40b85ba036ed117dad4f.svg" />
          <div className="input-cnt">
            <h1>CADASTRO</h1>
            <p>Por favor, prencha todos os campos vazios:</p>
            <input placeholder="Nome Completo"></input>
            <input placeholder="E-mail" type="email"></input>
            <input placeholder="CPF"></input>
            <button className="btn">CADASTRAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
