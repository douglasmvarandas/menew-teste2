import React from 'react';
import { Link } from 'react-router-dom';
import { FooterArea } from './styled';

const Footer = () => {
    return (
        <FooterArea>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to="">Login</Link>    
                        </li>
                        <li>
                            <Link to="/Cadastro">Cadastro</Link>    
                        </li>
                        <li>
                            <Link to="">Usuários</Link>    
                        </li>
                    </ul>
                </nav>
            </div>

        </FooterArea>
    );
}

export default Footer;