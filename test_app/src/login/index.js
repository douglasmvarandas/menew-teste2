/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
    Alert,
    Button,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Text,
    TextInput,
    View
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';
import {storagePath} from '../index';
import {limpaCPF} from '../cadastro/index';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.CPF_textInput = React.createRef();

    }

    async componentDidMount() {
        const user_array = JSON.parse(await AsyncStorage.getItem(storagePath.userArray) || '[]'),
            {
                navigation: {navigate},
            } = this.props;

        if (!user_array.length) {

            navigate('cadastro');

        }

    }

    state = {
        cpf: '',
        userName: ''
    };

    AddUser = async () => {
        const {
            navigation: {navigate},
        } = this.props;

        var {cpf, userName} = this.state,
            isLoogedIn = Boolean(userName && userName !== '');

        if (isLoogedIn) {

            this.setState({
                userName: ''
            });

            return;
        }

        const user_array = JSON.parse(await AsyncStorage.getItem(storagePath.userArray) || '[]');

        if (!user_array.length) {

            Alert.alert('Nenhum usuario cadastrado!');
            navigate('cadastro');
            return;
        }

        if ((cpf && cpf !== '')) {

            //Limpa tudo menos números do CPF
            var limpa_cpf = limpaCPF(cpf),
                cpf_len = limpa_cpf.length

            if (cpf_len !== 11) { //verifica se o CPF contem apenas 11 números

                Alert.alert('CPF tem 11 números, o seu contem ' + cpf_len);
                return;

            }

            var i = 0, len = user_array.length;

            for (i; i < len; i++) {

                if (user_array[i].cpf === limpa_cpf) {
                    userName = user_array[i].nome;
                }
            }

            if (userName) {
                Alert.alert(`Usuário ${userName} longado com sucesso!`);

                await AsyncStorage.setItem(
                    storagePath.userName,
                    userName
                );

                this.setState({
                    userName: userName
                });

                navigate('itens');

                //Limpa todas entradas pois os valores foram aceitos
                this.CPF_textInput.current.clear();

            } else {

                Alert.alert('Usuário não encontrado!');

            }

        } else {

            Alert.alert('Favor preencher CPF!');

        }
    };

    render() {

        const {cpf, userName} = this.state,
            isLoogedIn = Boolean(userName && userName !== ''),
            loggingText = isLoogedIn ? 'Longado como\n' + userName : 'Entrar com usuário',
            ButtonTExt = isLoogedIn ? 'Sair' : 'Entrar';

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.inner}>

                        <Text style={styles.header}>{loggingText}</Text>

                        <TextInput
                            placeholder="CPF"
                            keyboardType="numeric"
                            value={cpf}
                            ref={this.CPF_textInput}
                            onChangeText={(cpf) => this.setState({cpf: cpf})}
                            style={isLoogedIn ? styles.hide : styles.textInput}
                        />

                        <View style={styles.btnContainer}>
                            <Button color="orangered" title={ButtonTExt} onPress={this.AddUser} />
                        </View>

                    </View>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );

    }
}