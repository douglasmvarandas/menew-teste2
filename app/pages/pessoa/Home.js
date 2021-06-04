import React from 'react';
import {SafeAreaView, ScrollView, View, Text, FlatList, Image} from 'react-native';

import style from '../../../style/pessoa/Home';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Talles',
    photo: require('../../../assets/images/logo.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Kevin',
    photo: require('../../../assets/images/logo.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Inchado',
    photo: require('../../../assets/images/logo.png')
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Inchado',
    photo: require('../../../assets/images/logo.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Inchado',
    photo: require('../../../assets/images/logo.png')
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Inchado',
    photo: require('../../../assets/images/logo.png')
  }
];

const Item = ({ title, photo }) => (
  <ScrollView style={style.scroll}>
    <View style={style.container}>
      <Image style={style.img} source={photo} />
      <Text style={style.textos}>{title}</Text>
    </View>
    <Text><Text style={{fontWeight: 'bold'}}>Descrição:</Text> Melhor do mundofjakldlasjdjdaskdjkasldjlksjdlsajdkdjklsajdksajdkajdklasjldjaskdjklsadjlkajdlsdjaskdjaksdjsakldjaslkdjalskdjasjkd</Text>
  </ScrollView>
);

const renderItem = ({ item }) => (
  <Item title={item.title} photo={item.photo} />
);

const Home: () => Node = () => {
  return (
    <SafeAreaView style={style.super}>
          <FlatList keyExtractor={(item) => item.id} renderItem={renderItem} data={DATA} />      
    </SafeAreaView>
  );
};

export default Home;
