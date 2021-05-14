import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View} from 'react-native';

function login() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>login</Text>
    </View>
  );
}

function cadastro() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>cadastro</Text>
    </View>
  );
}

function itens() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>itens</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="login"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="login"
        component={login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cadastro"
        component={cadastro}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="itens"
        component={itens}
        options={{
          tabBarLabel: 'Itens',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="format-list-text"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
