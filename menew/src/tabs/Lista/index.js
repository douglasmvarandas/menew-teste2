import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import server from '../../services/server';

import Card from '../../components/Card';

import {COLORS} from '../../consts/utils';


const Lista = () => {
  const [data, setData]= useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setData(server);

      setIsLoading(false);
    }, 1000);
  }, [])


  if(isLoading) {
    return (
      <View style={styles.containerIndicator}>
         <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerTxt}>
        <Icon name="list" color={COLORS.white} size={22}  />
        <Text style={styles.text}>Lista</Text>
      </View>

      <FlatList
        style={styles.list} 
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Card item={item}  />
        )}
      />
    </View>
  );
}

export default Lista;

const styles = StyleSheet.create({
  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  container: {
    paddingTop: 0,
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  containerTxt: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  text: {
    color: COLORS.white,
    fontSize: 24,
    paddingLeft: 10,
    paddingBottom: 1,
  },
  list: {
    width: '100%',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  }
})