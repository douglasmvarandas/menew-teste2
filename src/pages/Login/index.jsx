import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';
import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";
import { SIGNUP } from "../../navigation/routes"

const Login = () => {
    return (
        <Container>
            <div>
                <img src={Logo} alt="Logo Menew" />
                <form>
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="E-mail"
                        type="email"
                    />
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="Senha"
                        type="password"
                    />
                    <ButtonComponent content='ENTRAR' color='neutral' fullWidth={true} />
                    <span>não tem cadastro? <a href={SIGNUP}>cadastre-se</a></span>
                </form>
            </div>
        </Container>
    );
}

export default Login;