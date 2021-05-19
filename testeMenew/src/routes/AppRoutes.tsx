import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from '../pages/Inicial';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Lista from '../pages/Home';

const { Navigator, Screen } = createStackNavigator();

function AppRoutes() {
    return (
        <NavigationContainer >
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Inicial" component={Inicial} />
                <Screen name="Cadastro" component={Cadastro} />
                <Screen name="Login" component={Login} />
                <Screen name="Lista" component={Lista} />
            </Navigator>
        </NavigationContainer >
    );
}

export default AppRoutes;