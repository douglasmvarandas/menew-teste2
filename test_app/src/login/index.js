/**
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
    Alert,
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Text,
    TextInput,
    View,
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
        //Verifica se existe usuarios cadastrados no inicio caso não navega pro
        const user_array = JSON.parse(
            (await AsyncStorage.getItem(storagePath.userArray)) || '[]',
        ),
            {
                navigation: {navigate},
            } = this.props;

        if (!user_array.length) {
            navigate('cadastro');
        }
    }

    state = {
        cpf: '',
        userName: '',
    };

    AddUser = async () => {
        //verifica se algum usuario existe se não pula para tela de cadastro
        const user_array = JSON.parse(
            (await AsyncStorage.getItem(storagePath.userArray)) || '[]',
        ),
            {
                navigation: {navigate},
            } = this.props;

        if (!user_array.length) {
            Alert.alert('Nenhum usuário cadastrado!');
            navigate('cadastro');
            return;
        }

        //Verifica se já esta longado se sim "des longa"
        var {userName} = this.state;

        if (userName && userName !== '') {
            this.setState({
                userName: '',
            });

            return;
        }

        //Verifica se o CPF adicionado é valido
        const {cpf} = this.state;

        if (cpf && cpf !== '') {
            //Limpa tudo menos números do CPF
            const limpa_cpf = limpaCPF(cpf),
                cpf_len = limpa_cpf.length;

            //verifica se o CPF contem apenas 11 números, pois é assim qe este é salvo
            if (cpf_len !== 11) {
                Alert.alert('CPF tem 11 números, o seu contem ' + cpf_len);
                return;
            }

            //verifica se o CPF existe na lista de usuários
            const index = user_array
                .map(function(pos) {
                    return pos.cpf;
                })
                .indexOf(limpa_cpf);

            if (index > -1) {
                // se sim salva o nome

                userName = user_array[index].nome;

                Alert.alert(`Usuário ${userName} longado com sucesso!`);

                await AsyncStorage.setItem(storagePath.userName, userName);

                this.setState({
                    userName: userName,
                });

                //Limpa todas entradas pois os valores foram aceitos
                //Para quando o usuário sair não ter valores
                this.CPF_textInput.current.clear();
                this.setState({
                    cpf: '',
                });

                navigate('login');
            } else {
                // se não avisa

                Alert.alert('Usuário não encontrado, cadastre-se!');
                navigate('login');
            }
        } else {
            Alert.alert('Favor preencher CPF!');
        }
    };

    render() {
        const {cpf, userName} = this.state,
            isLoggedIn = Boolean(userName && userName !== ''),
            loggingText = isLoggedIn
                ? 'Longado como\n' + userName
                : 'Entrar com usuário',
            ButtonTExt = isLoggedIn ? 'Sair' : 'Entrar';

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>{loggingText}</Text>

                        <TextInput
                            placeholder="CPF"
                            placeholderTextColor="darkgray"
                            keyboardType="numeric"
                            value={cpf}
                            ref={this.CPF_textInput}
                            onChangeText={text_cpf =>
                                this.setState({cpf: text_cpf})
                            }
                            style={isLoggedIn ? styles.hide : styles.textInput}
                        />

                        <View style={styles.btnContainer}>
                            <Button
                                color="orangered"
                                title={ButtonTExt}
                                onPress={this.AddUser}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}
