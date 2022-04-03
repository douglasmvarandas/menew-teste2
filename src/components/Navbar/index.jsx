import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from "../../navigation/routes";

import Logo from '../../assets/menew_logo.png';
import { Navbar } from './styles';

import { Search, SearchIconWrapper, StyledInputBase } from './stylesInputSearch';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <Navbar>
            <img src={Logo} alt="Logo Menew" />
            <Search>
                <SearchIconWrapper>
                    <SearchIcon color="error" />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Pesquise por produtos"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <IconButton
                edge="end"
                aria-haspopup="true"
                onClick={() => navigate(LOGIN)}
                color="error"
                title="Sair"
            >
                <LogoutIcon />
            </IconButton>
        </Navbar>

    );
}

export default NavBar;