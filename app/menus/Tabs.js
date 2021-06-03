import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import type {Node} from 'react';

import Home from '../pages/Home';

const Tabs = createBottomTabNavigator();

const Tab: () => Node = () => {
    return (
    
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
        </Tabs.Navigator>
    );
  };

  export default Tab;