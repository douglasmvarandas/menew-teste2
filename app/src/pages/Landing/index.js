import React from 'react';
import { Link, useHistory } from 'react-router-dom';


import './styles.css';

const Landing = () => {
  const history = useHistory();

  function handleLogin() {
    history.push('/dashboard');
  }

  return (
    <div className="landing-container">
      <div className="left-side">
        <h1>Menew</h1>
        <p>Uma plataforma que anda junto com sua empresa</p>
      </div>
      <div className="right-side">
        <form>
          <h1>Fazer Login</h1>
          <input type="text" name="email" placeholder="Informe o e-mail" />
          <input type="password" name="password" placeholder="Informe a senha" />
          <button className="button" onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Landing;