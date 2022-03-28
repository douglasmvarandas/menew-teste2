import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';

import style from '../../../style/pessoa/Cadastro';
import cache from '../../../data/Cache';

const Cadastro: () => Node = ({navigation}) => {
  const [erro, setErro] = React.useState();
  const [nome, setNome] = React.useState();
  const [email, setEmail] = React.useState();
  const [cpf, setCpf] = React.useState();
  const [senha, setSenha] = React.useState();
  const [confirma, setConfirma] = React.useState();

  const cadastrar = async () => {
    let array = [];
    array.push(nome);
    array.push(email);
    array.push(cpf);
    array.push(senha);
    array.push(confirma);

    if (senha != confirma) {
      setErro('Não há correspondência entra as senhas');
      return;
    }

    for (let i = 0; i < array.length; i++) {
      if (!array[i]) {
        setErro('Preencha os campos necessários');
        break;
      }
    }

    let objeto = {
      id: new Date().getTime(),
      email,
      nome,
      cpf,
      senha,
      photo: require('../../../assets/images/logo.png')
    };

    await cache.storeData(`pessoa${objeto.id}`, JSON.stringify(objeto));

    navigation.push('Home');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={style.img}
              source={require('../../../assets/images/logo.png')}
            />
          </View>
          <TextInput
            style={style.background}
            placeholderTextColor={style.background.color}
            onChangeText={text => setNome(text)}
            value={nome}
            placeholder="Nome"
          />
          <TextInput
            style={style.background}
            placeholderTextColor={style.background.color}
            placeholder="E-mail"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={style.background}
            placeholderTextColor={style.background.color}
            onChangeText={text => setCpf(text)}
            value={cpf}
            placeholder="CPF"
          />
          <TextInput
            style={style.background}
            placeholder="Senha"
            textContentType="password"
            onChangeText={text => setSenha(text)}
            value={senha}
            placeholderTextColor={style.background.color}
          />
          <TextInput
            style={style.background}
            placeholder="Confirmar Senha"
            textContentType="password"
            onChangeText={text => setConfirma(text)}
            value={confirma}
            placeholderTextColor={style.background.color}
          />
          <Text>{erro}</Text>
          <TouchableHighlight style={style.buttons} onPress={cadastrar}>
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
