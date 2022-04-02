import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';
import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";
import { LOGIN } from "../../navigation/routes"

const SignUp = () => {
    return (
        <Container>
            <div>
                <img src={Logo} alt="Logo Menew" />
                <form>
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="Nome"
                        type="text"
                    />
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
                        type="text"
                        label="CPF"
                    />
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="Senha"
                        type="password"
                    />
                    <ButtonComponent content='CADASTRAR' color='neutral' fullWidth={true} />
                    <span>já tem cadastro? <a href={LOGIN}>entrar</a></span>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;