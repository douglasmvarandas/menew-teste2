import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN, DASHBOARD } from "../../navigation/routes"

import { Container } from './styles';
import Logo from '../../assets/menew_logo.png';

import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";
import ReactInputMask from "react-input-mask";

import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/action/user.action'

import { user_state } from '../../utils/constants';
import { auth, db } from "../../firebase/firebase.js";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(setUser);
    const userCollectionRef = collection(db, "users")

    const [userSignUp, setUserSignUp] = useState(user_state);
    const [error, setError] = useState('');

    const createUser = async () => {
        try {
            const { email, password } = userSignUp;
            await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(userCollectionRef, { ...userSignUp, uid: auth.currentUser.uid });
            navigate(DASHBOARD);
        } catch (error) {
            setError('Ocorreu um erro ao criar o usuário, verifique email e/ou senha!');
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
                <form>
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="Nome"
                        type="text"
                        onChange={(e) => setUserSignUp({ ...userSignUp, name: e.target.value })}
                        value={userSignUp.name}
                    />
                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="E-mail"
                        type="email"
                        onChange={(e) => setUserSignUp({ ...userSignUp, email: e.target.value })}
                        value={userSignUp.email}
                    />
                    <ReactInputMask
                        mask={'999.999.999-99'}
                        alwaysShowMask={true}
                        maskChar={null}
                        value={userSignUp.cpf}
                        onChange={(e) =>
                            setUserSignUp({ ...userSignUp, cpf: e.target.value })
                        }
                    >
                        {(inputProps) => (
                            <InputComponent
                                {...inputProps}
                                required={true}
                                fullWidth={true}
                                color="primary"
                                label="CPF"
                            />
                        )}
                    </ReactInputMask>

                    <InputComponent
                        required={true}
                        fullWidth={true}
                        color="primary"
                        label="Senha"
                        type="password"
                        onChange={(e) => setUserSignUp({ ...userSignUp, password: e.target.value })}
                        value={userSignUp.password}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <ButtonComponent content='CADASTRAR' color='neutral' fullWidth={true} onClick={createUser} />
                    <span>já tem cadastro? <a href={LOGIN}>entrar</a></span>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;