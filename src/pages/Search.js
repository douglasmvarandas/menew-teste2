import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import { Container, SearchArea, Card, Texts } from '../styles/components/Search';
import getClientesList from '../Clientes';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

function Search() {
  const [clientesList, setClientesList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getClientesList();
      setClientesList(list);
    };
    loadAll();
  }, []);

  return (
    clientesList.length === 0
      ?
        <Container>
          <Header/>
            <div className="loader"></div>
        </Container>
      :
      <Container>
        <Header/>

        <SearchArea>
          {clientesList.map((item, key) => (
            <Card key={key}>
              <img src={item.image} alt={item.name} className="cliente-image"/>
              <Texts>
                <h2 className="name">{item.name}</h2>
                <p className="description">{item.description}</p>
              </Texts>
            </Card>
          ))}
        </SearchArea>

        <Footer/>

        <BottomNavigation/>
      </Container>
  )
}

export default Search;