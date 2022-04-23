import React from 'react';
import { StatusBar, LogBox } from 'react-native';

import { Rajdhani_700Bold, Rajdhani_500Medium, useFonts } from '@expo-google-fonts/rajdhani';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';


LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine']); // metodo para podermos ignorar avisos;
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.'])
export default function App() {

  const [fontsValided] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsValided) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <AuthProvider>
        <Routes />
      </AuthProvider>

    </>
  );
}

