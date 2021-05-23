import React, { useState, useEffect } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

import { Container, Menu } from './BottomNavigation';
import GlobalStyle from '../../styles/global';
import { Link } from 'react-router-dom';

function BottomMenu() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.location.href.match('/search') !== null) {
      if (document.getElementById('icon1')) {
        document.getElementById('icon1').style.opacity = 1;
      }
    } else if ((window.location.href.match('/login') !== null) || (window.location.href.match('/register') !== null)) {
      if (document.getElementById('icon2')) {
        document.getElementById('icon2').style.opacity = 1;
      }
    } else {
      if (document.getElementById('icon0')) {
        document.getElementById('icon0').style.opacity = 1;
      }
    }
  })

  return (
    <Container>
      <GlobalStyle/>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        id="bottom-navigation"
      >
        <Menu>
          <Link to="/">
            <BottomNavigationAction id="icon0" icon={<HomeRoundedIcon className="menu-icons"/>}/>
          </Link>

          <Link to="/search">
            <BottomNavigationAction id="icon1" icon={<SearchRoundedIcon className="menu-icons"/>}/>
          </Link>

          <Link to="/register">
            <BottomNavigationAction id="icon2" icon={<PersonRoundedIcon className="menu-icons"/>}/>
          </Link>
        </Menu>
      </BottomNavigation>
    </Container>
  )
}

export default BottomMenu;