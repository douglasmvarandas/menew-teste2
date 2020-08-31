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
    nome: '',
    cpf: '',
    email: '',
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
    const {nome, email, cpf} = this.state;

    if (nome !== '' && email !== '' && cpf !== '') {
      var cadastro = {
        nome: this.state.nome,
        email: this.state.email,
        cpf: this.state.cpf,
      };
      const anterior = await AsyncStorage.getItem('@menew-teste2:autenticacao');
      if (anterior === null) {
        await AsyncStorage.setItem(
          '@menew-teste2:autenticacao',
          JSON.stringify(cadastro),
        );
      } else {
        await AsyncStorage.setItem(
          '@menew-teste2:autenticacao',
          `[${anterior}` + ',' + `${JSON.stringify(cadastro)}]`,
        );
      }

      Alert.alert('Cadastrado!');
      navigate('Login');
    } else {
      Alert.alert('Por favor,preencher todos os dados!');
    }
  };

  render() {
    const {nome} = this.state;
    const {cpf} = this.state;
    const {email} = this.state;
    const {boasVindas} = this.state;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.background}>
            <View style={styles.background2}>
              <Text style={styles.txtWelcome}>Olá, {boasVindas}</Text>

              <View style={styles.containerForm}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 4,
                  }}>
                  <TextInput
                    placeholder="Nome"
                    style={styles.inputT1}
                    autoCapitalize="none"
                    placeholderTextColor="#708090"
                    value={nome}
                    onChangeText={(nome) => this.setState({nome: nome})}
                  />
                </View>
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                    padding: 4,
                  }}>
                  <TextInput
                    placeholder="Email"
                    style={styles.inputT1}
                    autoCapitalize="none"
                    placeholderTextColor="#708090"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCorrect={false}
                    value={email}
                    onChangeText={(email) => this.setState({email: email})}
                  />
                </View>

                <View style={{alignSelf: 'center'}}>
                  <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={this.signIn}>
                    <Text style={styles.submitText}>Cadastrar</Text>
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
