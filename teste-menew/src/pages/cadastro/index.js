import React from 'react';
import { Container, LinkText, Title, Input, MenuButton, Card } from './styles';
import Header from '../../components/header/index';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer/index';
import { connect } from 'react-redux';
import cadastroActions from '../../redux/cadastro/actions';

function Cadastro(props) {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [cpf, setCpf] = React.useState('');

    const { cadastroRequest } = props;

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    }

    const handleCadastro = (e) => {
        console.log(nome, email, cpf);
        e.preventDefault();
        cadastroRequest(nome, email, cpf);
        alert('Cadastro realizado com sucesso!');
        navigate('/login');
    }

    const handleNomeChange = (e) => {
        setNome(e.target.value);
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
                <Title>Faça aqui seu cadastro </Title>

                <Card>
                    <Input placeholder="Nome" onChange={e => handleNomeChange(e)} />
                    <Input placeholder="Email" onChange={e => handleEmailChange(e)} />
                    <Input placeholder="CPF" onChange={e => handleCpfChange(e)} />
                    <MenuButton onClick={handleCadastro} >Cadastrar</MenuButton>
                    <LinkText onClick={goToLogin}>
                        Já tem cadastro? Clique aqui.
                    </LinkText>
                </Card>
                <Footer />
            </Container>
        </>
    );
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, {
    ...cadastroActions,
})(Cadastro);
