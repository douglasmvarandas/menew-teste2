import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import Header from '../components/Header';
import { Container, RegisterArea } from '../styles/components/Register';
import { Form } from '../styles/components/Form';
import InputMask from 'react-input-mask';
import register from '../images/register.jpg';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

function Register() {
  const InputCPF = (props) => (
    <InputMask mask="999.999.999-99" id="cpf" value={props.value} placeholder="___.___.___-__" onChange={props.onChange} required/>
  );

  return (
    <Container>
      <Header/>

      <RegisterArea>
        <Form>
          <h1 className="title">Vamos começar!</h1>
          <h2 className="subtitle">Já possui uma conta? <Link to="/login" className="login-link">Entrar</Link></h2>

          <form className="form">
            <div className="input-form">
              <label htmlFor="name">Nome:</label>
              
              <div className="input-area">
                <PersonIcon className="name-icon"/>
                <input type="text" id="name" placeholder="Digite o seu nome..." required/>
              </div>
            </div>

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

            <div className="input-form">
              <label htmlFor="cpf">CPF:</label>

              <div className="input-area">
                <VpnKeyIcon className="cpf-icon"/>
                <InputCPF/>
              </div>
            </div>

            <div className="button-form">
              <button className="button" type="submit">Cadastrar</button>
            </div>
          </form>
        </Form>
        <img src={register} alt="Cadastrar" className="register-image"/>
      </RegisterArea>

      <Footer/>

      <BottomNavigation/>
    </Container>
  )
}

export default Register;