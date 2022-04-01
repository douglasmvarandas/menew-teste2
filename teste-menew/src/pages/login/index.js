/* eslint-disable eqeqeq */
import React from 'react';
import { Container, Title, Input, MenuButton, Card, LinkText } from './styles';
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import { usuarios } from '../../data';
import { connect } from 'react-redux';
import usuarioActions from '../../redux/login/actions';


function Login(props) {
    const [email, setEmail] = React.useState('');
    const [cpf, setCpf] = React.useState('');

    const { loginSuccess, login_failure, usuariosCadastrados } = props;

    console.log(usuariosCadastrados)

    let navigate = useNavigate();
    const goToCadastro = () => {
        navigate('/cadastro');
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const usuario = (usuarios.find(usuario => usuario.email == email && usuario.cpf == cpf)
            || usuariosCadastrados.find(usuario => usuario.email == email && usuario.cpf == cpf));

        if (usuario) {
            loginSuccess();
            alert('Login realizado com sucesso!');
            navigate('/');
        } else {
            login_failure();
            alert('Usuário não encontrado');
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleCpfChange = (e) => {
        setCpf(e.target.value);
    }

    return (
        <>
            <Container>
                <Header />
                <Title>Login</Title>

                <Card>
                    <Input placeholder="Email" onChange={e => handleEmailChange(e)} />
                    <Input placeholder="CPF" onChange={e => handleCpfChange(e)} />
                    <MenuButton onClick={handleLogin}>Entrar</MenuButton>

                    <LinkText onClick={goToCadastro}>
                        Não tem cadastro? Clique aqui.
                    </LinkText>
                </Card>
                <Footer />
            </Container>
        </>
    );
}

function mapStateToProps(state) {
    return {
        usuariosCadastrados: state.Cadastro.usuarios
    };
}

export default connect(mapStateToProps, {
    ...usuarioActions,
})(Login);

