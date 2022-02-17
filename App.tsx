import React from 'react';

import { useFonts } from 'expo-font';
import { Ruluko_400Regular } from '@expo-google-fonts/ruluko';

import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';
import { theme } from './src/global/styles/theme';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ruluko_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
