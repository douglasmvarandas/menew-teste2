import React, {useEffect, useState} from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api';
import logoImg from '../../assets/menew2.png';

import { 
    Container,
    Title, 
    BackToSignOutText ,
    BackToSignOut,
    Header,
    HeaderTitle,
    List,
    ProviderContainer,
    ProviderAvatar,
    ProviderInfo,
    ProviderName,
    ProviderDescription

} from './styles';


export interface Provider{
    id:string;
    name:string;
    description:string;
    avatar_url:string;
}
const Dashborad =()=>{
    const [data, setData]= useState([]);
    useEffect(() => {
        setTimeout(() => {
          setData(api);
        })
      }, [])

    const navigation = useNavigation();
    return(
        <>
        <Container>
            <Header>
                <HeaderTitle>
                    Bem vindo {"\n"}
                    <Title>Lista de funcionários:</Title>
                </HeaderTitle>
                <Image source={logoImg}/>
            </Header>
            <List
                data={data}
                keyExtractor={ provider => provider.id}
                renderItem={({ item: provider })=>(
                    <ProviderContainer>
                        <ProviderAvatar source={{uri: provider.avatar_url}} />
                        <ProviderInfo>
                            <ProviderName>
                                { provider.name }
                            </ProviderName>
                            <ProviderDescription>
                                {provider.description}
                            </ProviderDescription>
                        </ProviderInfo>
                    </ProviderContainer>

                )}
            
            />
          
        </Container>
        <BackToSignOut onPress={() => navigation.goBack()}>
            <Icon name="log-out" size={20} color="#fff" />
            <BackToSignOutText>Logout</BackToSignOutText >
        </BackToSignOut>
        </>
    );
}
export default Dashborad;