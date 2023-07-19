import React, { useState } from 'react';
import { TamaguiProvider, Theme, ThemeName } from 'tamagui';
import config from '../tamagui.config';
import { StatusBar } from 'react-native';
import { THEME } from '@constants/constants';
import { NavigationContainer } from '@react-navigation/native';
import { Navbar } from './navbar';
import { ThemeContext } from 'contexts/theme-context';
import { getDefaultTheme } from '@utils/get-default-theme';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function App(): JSX.Element {
  const [theme, setTheme] = useState(getDefaultTheme());

  const handleSetTheme = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };

  const contextValue = {
    theme,
    setTheme: handleSetTheme
  };

  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <ThemeContext.Provider value={contextValue}>
          <Theme name={theme}>
            <StatusBar
              barStyle={theme === THEME.DARK ? 'light-content' : 'dark-content'}
              backgroundColor={theme === THEME.DARK ? '#000' : '#fff'}
            />
            <Navbar />
          </Theme>
        </ThemeContext.Provider>
      </TamaguiProvider>
    </NavigationContainer>
  );
}

export default gestureHandlerRootHOC(App);
