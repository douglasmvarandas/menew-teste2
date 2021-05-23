import React from 'react';
import icon from '../../images/icon.png';
import { Link } from 'react-router-dom';

import { Container, Login } from './Header';
import GlobalStyle from '../../styles/global';

function Header() {
  return (
    <Container>
      <GlobalStyle/>
      <header className="header">
        <Link to="/" className="dashboard">
          <img src={icon} alt="Menew" className="icon"/>
          <span className="name">Menew</span>
        </Link>

        <Link to="/register" className="register">
          Cadastre-se
        </Link>

        <Link to="/login" className="login">
          <Login className="login-area">
            Entrar
          </Login>
        </Link>
      </header>
    </Container>
  )
}

export default Header;