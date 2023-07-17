import React, { useEffect, useState } from 'react';
import { TamaguiProvider, Theme, ThemeName } from 'tamagui';
import config from '../tamagui.config';
import { StatusBar } from 'react-native';
import { THEME } from '@constants/constants';
import { NavigationContainer } from '@react-navigation/native';
import { appStorage } from '@app-storage/app-storage';
import { Navbar } from './navbar';

function App(): JSX.Element {
  const [theme, setTheme] = useState<ThemeName>(THEME.LIGHT as ThemeName);

  useEffect(() => {
    const currentTheme = appStorage.getString('theme');

    if (currentTheme) {
      setTheme(currentTheme as ThemeName);
    } else {
      appStorage.set('theme', THEME.LIGHT);
    }
  }, []);

  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <Theme name={theme}>
          <StatusBar
            barStyle={theme === THEME.DARK ? 'light-content' : 'dark-content'}
            backgroundColor={theme === THEME.DARK ? '#000' : '#fff'}
          />
          <Navbar />
        </Theme>
      </TamaguiProvider>
    </NavigationContainer>
  );
}

export default App;
