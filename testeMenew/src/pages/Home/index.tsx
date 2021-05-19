import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Text, Image, StatusBar} from 'react-native';
import About from '../../components/About';
import BackgroundImage from '../../components/BackgroundImage';

export default function Home() {

  const [people, setPeople] = useState([
    {
      name: 'Jenniffer', 
      key: '1', 
      image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornish_cream_tea_2.jpg', 
      description: 'Olá, tudo bem?' 
    },
    {
      name: 'Jenniffer', 
      key: '2', 
      image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornish_cream_tea_2.jpg', 
      description: 'Olá, tudo bem?' 
    },
    {
      name: 'Jenniffer', 
      key: '3', 
      image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornish_cream_tea_2.jpg', 
      description: 'Olá, tudo bem?' 
    },
    {
      name: 'Jenniffer', 
      key: '4', 
      image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornish_cream_tea_2.jpg', 
      description: 'Olá, tudo bem?' 
    },
  ])
 
  return(
    <View style={styles.container}>
      <View style={styles.viewContainer}>
          <BackgroundImage />
          <About back={true} title="Lista" />
      </View>    
        <View style={styles.viewFlatList}>
              <FlatList
              data={people}
              keyExtractor={item => item.key}
              renderItem={({ item }) => {
                return (
                  <View style={styles.itemName}>
                    <Image style={styles.imagem} source={{uri: item.image}} />
                    
                      <Text style={styles.text}>{item.name}</Text>
                      <Text style={styles.text}>{item.description}</Text>
                   
                  </View>
                );
              }}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 1
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    flex: 1,
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 5
  },
  viewFlatList: {
    flexGrow: 1,
    borderRadius: 100,
    paddingTop: 360,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 12,
    position: 'absolute',
    left: 7.47,
    right: 7.47,
    top: 55.17,
  },
  itemName: {
    alignItems: "center",
    backgroundColor: '#567DF4',
    flexGrow: 1,
    margin: 4,
    padding: 20
    
  },
  viewText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    color: 'black',
    padding: 10
  }
})