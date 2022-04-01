import React from 'react';
import { FooterContainer, FooterImage } from './styles';
import logo from '../../assets/logomenew.png';


function Footer() {
    return (
        <FooterContainer>
            <FooterImage src={logo} />
        </FooterContainer>
    );
}

export default Footer;
