import React from 'react';
import {Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {COLORS} from '../../consts/utils'

const Login = ({navigation}) => {
  function handleSubmit() {
    navigation.navigate('BottomNavigator');
  }

	return(
    <KeyboardAvoidingView style={styles.container}>
			  <Text style={styles.title}>Faça seu Login</Text>

        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Senha" secureTextEntry />

        <Button label="Entrar" onPress={handleSubmit} />
    </KeyboardAvoidingView>
	);
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  title: {
    width: '100%',
    fontSize: 24,
    alignItems: 'flex-start',
    marginLeft: 35,
    marginBottom: 20,
    color: COLORS.white,
  },
  form: {
    backgroundColor: COLORS.inputs,
    width: '90%',
    marginBottom: 15,
    color: COLORS.white,
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
});

