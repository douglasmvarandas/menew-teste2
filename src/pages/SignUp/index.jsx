import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';
import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";
import { LOGIN, DASHBOARD } from "../../navigation/routes"

const SignUp = () => {
    const navigate = useNavigate();

    const submit = () => {
        navigate(DASHBOARD);
    }

    return (
        <Container>
            <div>
                <img src={Logo} alt="Logo Menew" />
                <form onSubmit={submit}>
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
                    <ButtonComponent content='CADASTRAR' color='neutral' fullWidth={true} type="submit" />
                    <span>já tem cadastro? <a href={LOGIN}>entrar</a></span>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;