import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';
import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";
import { SIGNUP, DASHBOARD } from "../../navigation/routes"
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
                    <ButtonComponent
                        content='ENTRAR'
                        color='neutral'
                        fullWidth={true}
                        type='submit'
                    />
                    <span>não tem cadastro? <a href={SIGNUP}>cadastre-se</a></span>
                </form>
            </div>
        </Container>
    );
}

export default Login;