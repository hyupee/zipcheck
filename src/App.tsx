import React, { useEffect } from 'react';
import { ThemeProvider } from './libs/providers';
import SplashScreen from 'react-native-splash-screen';
import { Navigation } from './Navigation';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { theme } from './libs/theme';

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.white,
  },
};

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  );
};
