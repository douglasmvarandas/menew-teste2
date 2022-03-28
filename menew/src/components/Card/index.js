import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {COLORS} from '../../consts/utils';


const Card = ({item}) => {
  return(
    <View style={styles.card}>
    <View style={styles.row}>
      <View style={styles.containerImg}>
      <Image source={{uri: item.foto}} style={styles.img}  resizeMode='cover' />
      </View>
      <View style={styles.content}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text 
          style={styles.descricao}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
            {item.descricao}
          </Text>
      </View>
    </View>
  </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 112,
    backgroundColor: '#3E3B47',
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImg: {
    paddingHorizontal: 16,
  },
  img: {
    width: 72,
    height: 72,
    backgroundColor: COLORS.white,
    borderRadius: 36,
  },
  content: {
    flex: 1,
    height: '80%',
    justifyContent: 'space-evenly'
  },
  nome: {
    fontSize: 18,
    color: COLORS.white,
  },
  descricao: {
    fontSize: 12,
    color: '#999591',
    paddingRight: 10,
  } 
});