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

export default class App extends Component {
    constructor(props) {
        super(props);

        this.Nome_textInput = React.createRef();
        this.CPF_textInput = React.createRef();
        this.Email_textInput = React.createRef();
    }

    state = {
        nome: '',
        cpf: '',
        email: '',
    };

    AddUser = async () => {
        const {
                navigation: {navigate},
            } = this.props,
            {nome, email, cpf} = this.state;

        //verificar se todas as entradas são não nulas e contem valor
        if (nome && nome !== '' && email && email !== '' && cpf && cpf !== '') {
            //Limpa tudo menos números do CPF
            var limpa_cpf = limpaCPF(cpf),
                cpf_len = limpa_cpf.length;

            //verifica se o nome só contém letras e espaço
            if (/[^a-z\s]/i.test(nome)) {
                Alert.alert('Nome só ṕode conter letras!');
                return;
            } else if (cpf_len !== 11) {
                //verifica se o CPF contem apenas 11 números

                Alert.alert('CPF tem 11 números, o seu contem ' + cpf_len);
                return;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                //verifica se o email tem formato valido

                Alert.alert(
                    'Email invalido, use \n letras_numeros@algo.com.br',
                );
                return;
            }

            //verifica se o usuario já existe
            var user_array = JSON.parse(
                    (await AsyncStorage.getItem(storagePath.userArray)) || '[]',
                ),
                index = user_array
                    .map(function (pos) {
                        return pos.cpf;
                    })
                    .indexOf(limpa_cpf),
                user_obj = {
                    nome: this.state.nome,
                    email: this.state.email,
                    cpf: limpa_cpf,
                };

            if (index > -1) {
                //se sim atualiza os valores

                user_array[index] = user_obj;

                Alert.alert('Usuário já existe infromações foram atualizadas!');
            } else {
                //se não adiciona ao vetor

                user_array.push(user_obj);

                Alert.alert('Usuário adicionado com sucesso!');
            }

            //Salva o vetor usuarios
            await AsyncStorage.setItem(
                storagePath.userArray,
                JSON.stringify(user_array),
            );

            //Navega para tela de fazer login
            navigate('login');

            //Limpa todas entradas pois os valores foram aceitos
            this.Nome_textInput.current.clear();
            this.CPF_textInput.current.clear();
            this.Email_textInput.current.clear();
        } else {
            Alert.alert('Favor preencher todos os valores!');
        }

        //console.log(await AsyncStorage.getItem(storagePath.userArray))
    };

    render() {
        const {nome, cpf, email} = this.state;

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Adicione um usuário</Text>

                        <TextInput
                            placeholder="Nome"
                            placeholderTextColor="darkgray"
                            value={nome}
                            ref={this.Nome_textInput}
                            onChangeText={text_nome =>
                                this.setState({nome: text_nome})
                            }
                            style={styles.textInput}
                        />

                        <TextInput
                            placeholder="CPF"
                            placeholderTextColor="darkgray"
                            keyboardType="numeric"
                            value={cpf}
                            ref={this.CPF_textInput}
                            onChangeText={text_cpf =>
                                this.setState({cpf: text_cpf})
                            }
                            style={styles.textInput}
                        />

                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="darkgray"
                            keyboardType="email-address"
                            value={email}
                            ref={this.Email_textInput}
                            onChangeText={text_email =>
                                this.setState({email: text_email})
                            }
                            style={styles.textInput}
                        />

                        <View style={styles.btnContainer}>
                            <Button
                                color="orangered"
                                title="Adicionar"
                                onPress={this.AddUser}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export function limpaCPF(cpf) {
    return cpf.replace(/\D/g, '');
}
