import React from 'react';
import { Link } from 'react-router-dom';
import ExploreIcon from '@material-ui/icons/Explore';

import Header from '../components/Header';
import { Container, Dashboard, Discover } from '../styles/components/Landing';
import BottomNavigation from '../components/BottomNavigation';

function Landing() {
  return (
    <Container>
      <Header/>

      <Dashboard>
        <h1 className="title">Encontre o melhor professor <span className="title-green">para você</span></h1>
        <h2 className="subtitle">Aprenda no <span className="subtitle-green">seu ritmo</span>. Instrutores <span className="subtitle-green">experientes</span> e <span className="subtitle-green">altamente qualificados</span>. Tecnologias <span className="subtitle-green">em alta</span> no mercado, com as <span className="subtitle-green">melhores práticas</span>. Tudo isso <span className="subtitle-green">online</span>, para você não precisar sair de casa!</h2>

        <Discover>
          <Link to="/search" className="search">
            <span className="text-primary">Descobrir agora mesmo</span> <br/>
            <span className="text-secondary">Acesse todas as informações</span>
          </Link>
          <ExploreIcon className="explore-icon"/>
        </Discover>
      </Dashboard>

      <BottomNavigation/>
    </Container>
  )
}

export default Landing;