import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
  } from 'react-native';

const Home: () => Node = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Home</Text>
         </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default Home;