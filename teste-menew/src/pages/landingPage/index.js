import React from 'react';
import { Container, Content, Title, NavBar, MenuButton } from './styles';
import Footer from '../../components/footer/index';
import { useNavigate } from "react-router-dom";
import ListaProdutos from '../../components/listaProdutos/index';
import { connect } from 'react-redux';

function LandingPage(props) {
    let navigate = useNavigate();
    const { isAuthenticated } = props;


    const goToCadastro = () => {
        navigate('/cadastro');
    }

    const goToLogin = () => {
        navigate('/login');
    }



    return (
        <Container>
            <Title>Bem vindo ao app de teste da empresa Menew :)</Title>
            <NavBar>
                <MenuButton onClick={goToLogin} >Login</MenuButton>
                <MenuButton onClick={goToCadastro} >Cadastro</MenuButton>
            </NavBar>
            {isAuthenticated ? <ListaProdutos /> : <>
                <Content>
                    <Title>Por favor, faça o login</Title>
                </Content>
            </>}
            <Footer />
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.Login.isAuthenticated,
    };
}

export default connect(mapStateToProps, {
})(LandingPage);

