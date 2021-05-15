import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import cadastro from './cadastro/index';
import login from './login/index';
import itens from './itens/index';

const Tab = createBottomTabNavigator();

function Tabs() {

  return (
    <Tab.Navigator
      initialRouteName='login'
      activeColor="orangered"
      tabBarOptions={{
        activeTintColor: 'orangered',
        inactiveTintColor: 'lightslategrey'
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

export const storagePath = {
  userArray: '@test_app:users',
  userName: '@test_app:username',
};
