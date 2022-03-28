import React from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native'

import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
    Container,
    Title, 
    ForgotPassword, 
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText
} from './styles';

import logoImg from '../../assets/menew.png';


const SignIn =()=>{
    const navigation = useNavigation();
    return(
        <>
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flex:1}}
        >
        <Container>
            <Image source={logoImg}/>
            <Title>Faça seu logon</Title>

            <Input name="email" icon="mail" placeholder="E-mail"/>

            <Input name="password" icon="lock" placeholder="Senha"/>

            <Button onPress={()=> navigation.navigate('Dashboard')}>Entrar</Button>
            <ForgotPassword onPress={()=>{}}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
        </Container>
        </ScrollView>
        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color="red" />
            <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
        </>
    );
}
export default SignIn;