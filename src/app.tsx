import React, { useEffect, useState } from 'react';
import { TamaguiProvider, Theme, ThemeName } from 'tamagui';
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
import { StatusBarContext } from 'contexts/status-bar-context';
import { AuthProvider } from 'contexts/auth-context';

function App(): JSX.Element {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isStatusBarTransparent, setIsStatusBarTransparent] = useState(false);

  useEffect(() => {
    SplashScreen.hide();

    let onboarded = appStorage.getBoolean(ONBOARDED);

    if (onboarded === null || onboarded === undefined) {
      onboarded = false;

      appStorage.set(ONBOARDED, false);
    }

    setIsOnboarded(onboarded);

    setIsStatusBarTransparent(true);

    return () => {
      setIsStatusBarTransparent(false);
    };
  }, []);

  const handleSetTheme = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };

  const handleSetIsStatusBarTransparent = (isTransparent: boolean) => {
    setIsStatusBarTransparent(isTransparent);
  };

  const themeContextValue = {
    theme,
    setTheme: handleSetTheme
  };

  const isStatusBarTransparentContextValue = {
    isStatusBarTransparent,
    setIsStatusBarTransparent: handleSetIsStatusBarTransparent
  };

  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <ThemeContext.Provider value={themeContextValue}>
          <StatusBarContext.Provider value={isStatusBarTransparentContextValue}>
            <AuthProvider>
              <Theme name={theme}>
                <StatusBar
                  barStyle={theme === THEME.DARK ? 'light-content' : 'dark-content'}
                  backgroundColor={
                    isStatusBarTransparent
                      ? 'transparent'
                      : theme === THEME.DARK
                      ? '#000'
                      : '#fff'
                  }
                  translucent={isStatusBarTransparent}
                />
                <AppStack isOnboarded={true} />
              </Theme>
            </AuthProvider>
          </StatusBarContext.Provider>
        </ThemeContext.Provider>
      </TamaguiProvider>
    </NavigationContainer>
  );
}

export default gestureHandlerRootHOC(App);
