import React from 'react';
import {Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import {COLORS} from '../../consts/utils';

const Input = ({placeholder, secureTextEntry = false, keyboardType = 'default'}) => {
  return(
    <TextInput 
      style={styles.form}  
      placeholder={placeholder}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onChangeText={() => {}}
      placeholderTextColor={COLORS.white}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  form: {
    backgroundColor: COLORS.inputs,
    width: '90%',
    marginBottom: 15,
    color: COLORS.white,
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
});