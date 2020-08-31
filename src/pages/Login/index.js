import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  Image,
  Keyboard,
  StyleSheet,
} from 'react-native';
import styles from './styles/styles';

import {TextInputMask} from 'react-native-masked-text';
export default class App extends Component {
  state = {
    cpf: '',
    boasVindas: '',
  };

  async componentDidMount() {
    var hora = new Date().getHours();

    if (hora < 13) {
      this.setState({boasVindas: 'Bom Dia!'});
    } else if (hora > 12 && hora < 18) {
      this.setState({boasVindas: 'Boa Tarde!'});
    } else if (hora > 17 && hora < 24) {
      this.setState({boasVindas: 'Boa Noite!'});
    }
  }

  signIn = async () => {
    const {
      navigation: {navigate},
    } = this.props;
    const {cpf} = this.state;

    console.log(cpf);
    const verificarCadastro = await AsyncStorage.getItem(
      '@menew-teste2:autenticacao',
    );

    console.log(verificarCadastro);

    if (verificarCadastro.startsWith('{')) {
      const verificacao = JSON.parse(verificarCadastro);
      const array = [];
      array.push(verificacao);
      console.log(array);
      for (let i = 0; i < array.length; i++) {
        if (array[i].cpf === cpf) {
          await AsyncStorage.setItem('@mnwTeste:login', 'logado');
          navigate('Itens');
        } else {
          Alert.alert('CPF não cadastrado!');
        }
      }
    } else {
      const verificacao = JSON.parse(verificarCadastro);
      console.log(verificacao);
      for (let i = 0; i < verificacao.length; i++) {
        if (verificacao[i].cpf === cpf) {
          await AsyncStorage.setItem('@mnwTeste:login', 'logado');
          navigate('Itens');
        } else {
          Alert.alert('CPF não cadastrado!');
        }
      }
    }
  };

  render() {
    const {cpf} = this.state;
    const {boasVindas} = this.state;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.background}>
            <View style={styles.background2}>
              <Text style={styles.txtWelcome}>Olá, {boasVindas}</Text>

              <View style={styles.containerlogo}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                    padding: 4,
                  }}>
                  <TextInputMask
                    placeholder="CPF"
                    style={styles.inputT1}
                    autoCapitalize="none"
                    placeholderTextColor="#708090"
                    autoCorrect={false}
                    type={'cpf'}
                    value={cpf}
                    onChangeText={(cpf) => {
                      this.setState({
                        cpf: cpf,
                      });
                    }}
                  />
                </View>

                <View style={{alignSelf: 'center'}}>
                  <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={this.signIn}>
                    <Text style={styles.submitText}>Entrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
