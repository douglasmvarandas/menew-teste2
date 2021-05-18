import React from 'react';
import {View,Text , TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {COLORS} from '../../consts/utils';

const Cadastro = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Usuário</Text>

      <Input placeholder="Nome" />
      <Input placeholder="Email" keyboardType="email-address"/>
      <Input placeholder="CPF" keyboardType="numeric"/>

      <Button label="Cadastrar" onPress={() => {console.log('cadastrar')}}/>
    </View>
  );
}

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  title: {
    width: '100%',
    fontSize: 24,
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
})