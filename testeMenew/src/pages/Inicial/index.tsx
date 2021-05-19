import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Buttons } from './styles';

import About from '../../components/About';
import BackgroundImage from '../../components/BackgroundImage';

import { Container, Button, TextButton } from '../../components/Styles';

function Inicial() {

  const { navigate } = useNavigation();


  function handleNavigationToCadastroPage() {
    navigate('Cadastro');
  }

  function handleNavigationToLoginPage() {
    navigate('Login');
  }

  function handleListItens(){
    navigate('Lista')
  }


  return (
    <Container>
        <BackgroundImage />

        <About
          title="Bem vindo"
        />

        <Buttons>
          <Button onPress={handleNavigationToCadastroPage} >
            <TextButton >Cadastar</TextButton>
          </Button>
          <Button onPress={handleNavigationToLoginPage} >
            <TextButton >Login</TextButton>
          </Button>
          <Button onPress={handleListItens} >
            <TextButton >Lista</TextButton>
          </Button>
        </Buttons>
    </Container>
  );
};

export default Inicial;