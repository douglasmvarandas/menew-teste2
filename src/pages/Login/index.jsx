import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP, DASHBOARD } from "../../navigation/routes"

import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';

import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";

import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/action/user.action'
import { user_state } from '../../utils/constants';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(setUser);

    const [auth, setAuth] = useState(user_state);

    const submit = () => {
        dispatch(setUser(auth))
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
                        onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                        value={auth.email}
                    />
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="Senha"
                        type="password"
                        onChange={(e) => setAuth({ ...auth, password: e.target.value })}
                        value={auth.password}
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