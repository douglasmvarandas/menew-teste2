import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppRoutes from './src/routes/AppRoutes';

import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_300Light_Italic,Roboto_500Medium,Roboto_700Bold,Roboto_400Regular} from '@expo-google-fonts/roboto';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {

    return <AppLoading />;

  } else {

    return (
      <>
        <AppRoutes />
        <StatusBar hidden  />
      </>
    );
  }
}