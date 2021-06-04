import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import type {Node} from 'react';

import Home from '../pages/pessoa/Home';
import Cadastro from '../pages/pessoa/Cadastro';

const Tabs = createBottomTabNavigator();

const Tab: () => Node = () => {
    return (
    
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Cadastro" component={Cadastro} />
        </Tabs.Navigator>
    );
  };

  export default Tab;