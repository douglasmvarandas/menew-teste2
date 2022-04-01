import React from 'react';
import { HeaderContainer, HeaderImg, ButtonVoltar } from './styles';
import logo from '../../assets/logomenew.png';
import { useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    const goToLandingPage = () => {
        navigate('/');
    }

    return (
        <HeaderContainer>
            <ButtonVoltar onClick={goToLandingPage} >Voltar à página inicial</ButtonVoltar>
            <HeaderImg src={logo} />
        </HeaderContainer>
    );
}

export default Header;