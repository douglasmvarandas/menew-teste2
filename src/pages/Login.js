import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import Header from '../components/Header';
import { Container, LoginArea } from '../styles/components/Login';
import { Form } from '../styles/components/Form';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

function Login() {
  return (
    <Container>
      <Header/>

      <LoginArea>
        <Form>
          <h1 className="title">Bem vindo!</h1>
          <h2 className="subtitle">Insira suas credenciais e obtenha acesso</h2>

          <form className="form">
            <div className="input-form">
              <label htmlFor="email">Email:</label>
              
              <div className="input-area">
                <EmailIcon className="email-icon"/>
                <input type="email" id="email" placeholder="Digite o seu email..." required/>
              </div>
            </div>

            <div className="input-form">
              <label htmlFor="password">Senha:</label>

              <div className="input-area">
                <LockIcon className="lock-icon"/>
                <input type="password" id="password" placeholder="Digite a sua senha..." required/>
              </div>
            </div>

            <div className="button-form">
              <button className="button" type="submit">Entrar</button>
            </div>
          </form>
        </Form>
      </LoginArea>

      <Footer/>

      <BottomNavigation/>
    </Container>
  )
}

export default Login;