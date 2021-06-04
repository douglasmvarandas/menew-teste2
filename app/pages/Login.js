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

  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const [erro, setErro] = React.useState();

  const entrarApp = () => {
    setErro('')
    if (email == 'teste@gmail.com' && senha == '123'){
      navigation.replace("Home");
    }
    else if (!email || !senha ) {
        setErro('Preencha os campos necessários')
    }
    else {
      setErro('Informações inválidas, por favor tente novamente');
    }
   
  }

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
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor={loginCss.background.color}
            style={loginCss.background}
            secureTextEntry={true}
            onChangeText={text => setSenha(text)}
            value={senha}
          />
          <Text>{erro}</Text>
          <TouchableHighlight
            style={loginCss.buttons}
            onPress={entrarApp}>
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
