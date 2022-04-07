import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP, DASHBOARD } from "../../navigation/routes"

import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';

import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";

import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/action/user.action'
import { user_state } from '../../utils/constants';

import { auth } from "../../firebase/firebase.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(setUser);

    const [userLogin, setUserLogin] = useState(user_state);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const { email, password } = userLogin;
            await signInWithEmailAndPassword(auth, email, password);
            navigate(DASHBOARD);
        } catch (error) {
            setError('Email ou Senha inválidos!');
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("User is signed in");
                dispatch(setUser(user));
            }
        })
    }, [])

    return (
        <Container>
            <div>
                <img src={Logo} alt="Logo Menew" />
                <form >
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="E-mail"
                        type="email"
                        onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                        value={userLogin.email}
                    />
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="Senha"
                        type="password"
                        onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                        value={userLogin.password}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <ButtonComponent
                        content='ENTRAR'
                        color='neutral'
                        fullWidth={true}
                        onClick={handleLogin}
                    />
                    <span>não tem cadastro? <a href={SIGNUP}>cadastre-se</a></span>
                </form>
            </div>
        </Container>
    );
}

export default Login;