import React from 'react';
import CardCollapse from '../../components/CardCollapse';
import Menu from '../../components/Menu';
import server from '../../services/server.json';
import { Card, CardContent, Container, Description } from './styles';

const Home: React.FC = () => {
  console.log(server);

  return (
    <>
      <Menu isAuthenticated currentLocale="home" />
      <Container>
        {server.map(product => (
          <Card>
            <CardContent>
              <img src={product.urlImage} alt={product.name} />
              <Description>
                <article>
                  <h2>{product.name}</h2>
                  <span>{product.price}</span>
                </article>
                <CardCollapse
                  title="Descrição"
                  body={product.description}
                  expanded
                />
              </Description>
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Home;
