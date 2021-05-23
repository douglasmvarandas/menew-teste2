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
        <h1 className="title">A melhor solução em food service <span className="title-red">para você!</span></h1>
        <h2 className="subtitle">Soluções para o <span className="subtitle-red">seu negócio</span>. Desde <span className="subtitle-red">delivery</span> até <span className="subtitle-red">atendimento presencial</span>. Empresa de Tecnologia que <span className="subtitle-red">mais cresce</span> no mercado, com os <span className="subtitle-red">melhores produtos</span></h2>

        <Discover>
          <Link to="/search" className="search">
            <span className="text-primary">Veja você mesmo</span> <br/>
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