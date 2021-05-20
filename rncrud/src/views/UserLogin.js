
import React, { Component } from 'react'
import {Alert, Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'

export default class Login extends Component{

  clicou = () => {
    Alert.alert("clicado");
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Image 
           source ={require('logo.png')}
            style={style.logo}
           />
      
        <TextInput 
        style={style.input}
        placeholder="Digite um email"
        />

        <TextInput
        style={style.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
        />

      <TouchableOpacity style={styles.botao} onPress={() => {clicou()}}>
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>
      </View>
    )
  }
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },

  input:{
    marginTop: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'hold',
    borderRadius: 3
  },

  botao: {
    width:300,
    height:42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }

})