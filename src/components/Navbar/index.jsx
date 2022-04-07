import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from "../../navigation/routes";

import Logo from '../../assets/menew_logo.png';
import { Navbar } from './styles';

import { Search, SearchIconWrapper, StyledInputBase } from './stylesInputSearch';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

import { auth } from '../../firebase/firebase.js';
import { signOut } from "firebase/auth";

import { useDispatch } from 'react-redux'
import { setUserLogout } from '../../redux/action/user.action'

const NavBar = (props) => {
    const { setSearchProducts } = props;
    const dispatch = useDispatch(setUserLogout);

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
                    onChange={(e) => setSearchProducts(e.target.value)}
                />
            </Search>
            <IconButton
                edge="end"
                aria-haspopup="true"
                onClick={() =>
                    signOut(auth)
                        .then(() => {
                            dispatch(setUserLogout());
                            console.log('Signed out');
                            navigate(LOGIN)
                        })}
                color="error"
                title="Sair"
            >
                <LogoutIcon />
            </IconButton>
        </Navbar>
    );
}

export default NavBar;