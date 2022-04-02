import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import sprites from '../../assets/sprites.png';

function Navbar(props) {
    var userOptions;
        if (props.user) {
            userOptions = <Link to="/">Deslogar</Link>;
        };

    return (
        <div className="navbar">
            <div className="links">
                <Link to={{ pathname: '/dash', state: null }} id="Logo" style={{backgroundImage: 'url('+sprites+')'}}>Início</Link>
                {userOptions}
            </div>
        </div>
    )
}

export default Navbar;