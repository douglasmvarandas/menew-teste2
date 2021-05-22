import React from 'react';
import Header from '../components/Header';
import NavTop from './NavBar/NavTop';
import { Wrapper } from './styles';


const Layout: React.FC = () => {

  return(
    <Wrapper>
        <Header>
            <NavTop />
        </Header>
    </Wrapper>
  )
  ;
}

export default Layout;