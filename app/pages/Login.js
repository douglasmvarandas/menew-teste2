import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

import loginCss from '../../style/Login';

const Login: () => Node = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={loginCss.container}>
        <View>
          <View style={{alignItems: 'center'}}>
          <Image style={loginCss.img} source={require('../../assets/images/logo.png')} />
          </View>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={loginCss.background.color}
            style={loginCss.background}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor={loginCss.background.color}
            style={loginCss.background}
            secureTextEntry={true}
          />
          <TouchableHighlight
            style={loginCss.buttons}
            onPress={() => navigation.replace('Home')}>
            <View>
              <Text style={loginCss.buttons}>Entrar</Text>
            </View>
          </TouchableHighlight>
          {/* <TouchableHighlight
            style={loginCss.buttons}
            onPress={() => navigation.replace('Cadastro')}>
            <View>
            <Text style={loginCss.buttons}>Cadastrar</Text>
            </View>
          </TouchableHighlight> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
