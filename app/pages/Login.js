import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    TextInput,
    View,
    Button,
  } from 'react-native';

const Login: () => Node = ({ navigation }) => {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="CPF" />
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

  export default Login;