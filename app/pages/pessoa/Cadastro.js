import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    TextInput,
    View,
    Button,
  } from 'react-native';

const Cadastro: () => Node = ({ navigation }) => {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
          <TextInput placeholder="Nome" />
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="CPF" />
          <TextInput placeholder="Senha" textContentType="password" />
          <TextInput placeholder="Confirmar Senha" textContentType="password" />
          <Button
            title="Entrar"
            color="#841584"
            onPress={() => navigation.replace('Home')}
             accessibilityLabel="Learn more about this purple button"
  />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default Cadastro;