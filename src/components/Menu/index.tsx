import React from 'react';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/icons/logo.png';
import { useAuth } from '../../hooks/auth';
import { Container, Logo, Option, Options } from './styles';

export interface IHeaderProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  ribbonEnv?: string;
  isInProduction?: boolean;
  isSwaggerEnabled?: boolean;
  currentLocale?: string;
  // onLocaleChange: Function;
}

const Menu = ({ currentLocale }: IHeaderProps) => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Logo src={LogoImg} alt="logo" />
      <Options>
        <Link to="/home">
          <FiHome size={20} />
          <Option isActive={currentLocale === 'home'}>Home</Option>
        </Link>
        <Link to="/">
          <FiLogOut size={20} />
          <Option>Sair</Option>
        </Link>
      </Options>
    </Container>
  );
};

export default Menu;
