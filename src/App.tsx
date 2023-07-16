import React, { useEffect, useState } from 'react';
import { TamaguiProvider, Theme, ThemeName } from 'tamagui';
import config from '../tamagui.config';
import { StatusBar } from 'react-native';
import { appStorage } from '@appStorage/appStorage';
import { THEME } from '@constants/constants';
import { NavigationContainer } from '@react-navigation/native';
import { Navbar } from '@components/Navbar';

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

  // TODO: To use with ThemeSelector
  /* const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);
  }; */

  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <Theme name={theme}>
          <StatusBar
            barStyle={theme === THEME.DARK ? 'light-content' : 'dark-content'}
            backgroundColor={theme === THEME.DARK ? '#000' : '#fff'}
          />
          {/* <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Settings'>
              {props => (
                <SettingsScreen
                  {...props}
                  onThemeChange={handleThemeChange}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator> */}
          <Navbar />
        </Theme>
      </TamaguiProvider>
    </NavigationContainer>
  );
}

export default App;
