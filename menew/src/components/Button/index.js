import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {COLORS} from '../../consts/utils'

const Button = ({label, onPress}) => {
  return(
  <TouchableOpacity style={styles.btnSubmit} onPress={onPress}>
    <Text style={styles.textSubmit}>{label}</Text>
  </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  btnSubmit: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '90%',
    borderRadius: 7,
    padding: 12,
    marginTop: 10,
  },
  textSubmit: {
    color: COLORS.white,
    fontSize: 18,
  }
});