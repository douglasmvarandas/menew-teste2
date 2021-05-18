import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



import Lista from '../tabs/Lista';
import Cadastro from '../tabs/Cadastro';

const Tab = createBottomTabNavigator();


import {COLORS} from '../consts/utils';


const BottomNavigator = () => {
  return(
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS.primary,
          height: 60,
          shadowOffset: {height: 0, width: 2},
          shadowColor: COLORS.primary,
          shadowRadius: 88,
          shadowOpacity: 1,
        },
        activeTintColor: COLORS.background,
        inactiveTintColor: COLORS.white,
      }}
    >
      <Tab.Screen 
        name="Lista" 
        component={Lista}
        options={{
          tabBarIcon: ({color}) => <Icon name="list" color={color} size={22} />,
        }} 
      />
      <Tab.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{
          tabBarIcon: ({color}) => <Icon name="user-plus" color={color}  size={22}/>,
        }} 
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;