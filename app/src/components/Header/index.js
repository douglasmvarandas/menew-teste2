import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiUser, FiGrid } from 'react-icons/fi';

import './styles.css';

const Header = (props) => {
  const { name } = props

  const history = useHistory();

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  function handleLogout() {
    history.push('/');
  }

  return (
    <div className="header">
      <p>Olá, {name}</p>
      <Link to="/dashboard">
        <h1>Menew</h1>
      </Link>
      <div className="group-options">
        <div className="menu-container">
          <button title="Expandir Menu" type="button" className="menu-trigger" onClick={onClick}>
            <FiGrid size={24} color="#FFF" />
          </button>
          <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              <li>
                <Link to="/new-user">
                  Cadastrar Usuário
                </Link>
              </li>
              <li>
                <Link to="/user-detail">
                  Consultar Usuário
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <Link to="/profile" title="Meu Perfil">
          <button type="button" onClick={() => { }}>
            <FiUser size={24} color="#FFF" />
          </button>
        </Link> */}
        <button type="button" onClick={handleLogout}>
          <FiPower size={24} color="#FFF" />
        </button>
      </div>
    </div>
  );
}

export default Header;