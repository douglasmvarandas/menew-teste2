/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import CardImg from '../../components/Card/CardImg';
import { Spinner } from '../../components/Spinner/styles';
import api from '../../services/api';
import { CardWrapper, Container, HeadBarTitle, Title } from './styles';

const Home: React.FC = () => {
  const [state, setState] = useState<any[]>([] as any[]);
  const [loading, setLoading] = useState<boolean>();
  
  const getData = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get(
      `products`
    );

    setLoading(false);
    setState(data);
  }, []);
  
  useEffect(() => {
    getData();
  }, [getData]);
 return (
   <>

   <Container>
    {loading ?(<Spinner/>): state.map(product=>(
      <CardWrapper>
        <CardImg>
          <img src={product.image_url}/>
        </CardImg>
        <Card>
          <Title>{product.name}</Title>
          <HeadBarTitle>
              <span>{`${product.description}`}</span>
          </HeadBarTitle>
        </Card>
      </CardWrapper>
    ))}
   </Container>
   </>
   
 );
};

export default Home;