import React from 'react';

import { Container } from './Footer';
import icon from '../../images/icon.png';
import GlobalStyle from '../../styles/global';

function Footer() {
  return (
    <Container>
      <GlobalStyle/>
      <footer className="footer">
        <img src={icon} alt="Menew" className="icon"/>
        <span className="name">Menew</span>
      </footer>
    </Container>
  )
}

export default Footer;