import React, { useEffect, useState } from 'react';
import { TamaguiProvider, Theme, ThemeName, isClient } from 'tamagui';
import config from '../tamagui.config';
import { StatusBar } from 'react-native';
import { THEME } from '@constants/constants';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from 'contexts/theme-context';
import { getDefaultTheme } from '@utils/get-default-theme';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen
import { appStorage } from '@app-storage/app-storage';
import { ONBOARDED } from '@constants/app-storage';
import { AppStack } from '@screens/app-stack';

function App(): JSX.Element {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [isOnboarded, setIsOnboarded] = useState(false);

  const handleSetTheme = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };

  const contextValue = {
    theme,
    setTheme: handleSetTheme
  };

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.

    let onboarded = appStorage.getBoolean(ONBOARDED);

    if (onboarded === null || onboarded === undefined) {
      onboarded = false;

      appStorage.set(ONBOARDED, false);
    }

    setIsOnboarded(onboarded);
  }, []);

  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <ThemeContext.Provider value={contextValue}>
          <Theme name={theme}>
            <StatusBar
              barStyle={theme === THEME.DARK ? 'light-content' : 'dark-content'}
              backgroundColor={theme === THEME.DARK ? '#000' : '#fff'}
            />
            <AppStack
              isOnboarded={isOnboarded}
              isLoggedIn={isLoggedIn}
            />
          </Theme>
        </ThemeContext.Provider>
      </TamaguiProvider>
    </NavigationContainer>
  );
}

export default gestureHandlerRootHOC(App);
