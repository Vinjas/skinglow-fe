import React, { useEffect, useState } from 'react';
import { TamaguiProvider, Theme, ThemeName } from 'tamagui';
import config from '../tamagui.config';
import { StatusBar } from 'react-native';
import { appStorage } from './appStorage/appStorage';
import { THEME } from './constants';
import { ThemeSelector } from './components/ThemeSelector';
import { Home } from './pages/Home';
import { LanguageSwitcher } from './components/LanguageSwitcher';

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

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };

  return (
    <TamaguiProvider config={config}>
      <Theme name={theme}>
        <StatusBar
          barStyle={theme === THEME.DARK ? 'light-content' : 'dark-content'}
          backgroundColor={theme === THEME.DARK ? '#000' : '#fff'}
        />
        <Home />
        <ThemeSelector onThemeChange={handleThemeChange} />
        <LanguageSwitcher />
      </Theme>
    </TamaguiProvider>
  );
}

export default App;
