import React from 'react';

//importação para navegação
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//importação de icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//importação das telas
import Login from '../../src/pages/Login/index';
import Cadastro from '../../src/pages/Cadastro/index';
import Itens from '../../src/pages/Itens/index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account-plus"
                size={30}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account-check"
                size={30}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Itens"
          component={Itens}
          options={{
            tabBarLabel: 'Itens',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account-details"
                size={30}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
