import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN, DASHBOARD } from "../../navigation/routes"

import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';

import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";

import { user_state } from '../../utils/constants';

const SignUp = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(user_state);

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
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        value={user.name}
                    />
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="E-mail"
                        type="email"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        value={user.email}
                    />
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        type="text"
                        label="CPF"
                        onChange={(e) => setUser({ ...user, cpf: e.target.value })}
                        value={user.cpf}
                    />
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="Senha"
                        type="password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        value={user.password}
                    />
                    <ButtonComponent content='CADASTRAR' color='neutral' fullWidth={true} type="submit" />
                    <span>já tem cadastro? <a href={LOGIN}>entrar</a></span>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;