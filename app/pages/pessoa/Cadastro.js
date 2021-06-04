import React from 'react';
import {SafeAreaView, ScrollView, TextInput, View, Button, TouchableHighlight, Text, Image} from 'react-native';

import style from '../../../style/pessoa/Cadastro';
import loginCss from '../../../style/Login';

const Cadastro: () => Node = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{alignItems: 'center'}}>
            <Image style={style.img} source={require('../../../assets/images/logo.png')} />
          </View>
          <TextInput style={style.background} placeholder="Nome" />
          <TextInput style={style.background} placeholder="E-mail" />
          <TextInput style={style.background} placeholder="CPF" />
          <TextInput
            style={style.background}
            placeholder="Senha"
            textContentType="password"
          />
          <TextInput
            style={style.background}
            placeholder="Confirmar Senha"
            textContentType="password"
          />
          <TouchableHighlight
              style={style.buttons}
              onPress={() => navigation.replace('Home')}>
            <View>
              <Text style={style.buttons}>Entrar</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro;
