import React, { useState } from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native'

export default ({route, navigation}) => {
  // console.warn(Object.keys(props.route))
  const [user, setUser]  =  useState(route.params ? route.params : {})
    return (
      <View style={style.form}>
      <Text>Name:</Text>
      <TextInput
      style={style.input}
          onChangeText = {name => setUser({...user, name})}
          placeholder="Informe o Nome"
          value={user.name}
      />
      <Text>CPF:</Text>
      <TextInput
      style={style.input}
          onChangeText = {cpfl=> setUser({...user, cpf})}
          placeholder="Informe o CPF"
          value={user.cpf}
      />
      <Text>E-mail:</Text>
      <TextInput
      style={style.input}
          onChangeText = {email=> setUser({...user, email})}
          placeholder="Informe seu e-mail"
          value={user.email}
      />
      <Button title="Salvar" color='blue' onPress={()=> { navigation.goBack() }  } />
      </View>
    )
}

const style = StyleSheet.create ({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1, 
    marginBottom: 10,
  }
})