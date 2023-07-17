import { appStorage } from '@app-storage/app-storage';
import { THEME } from '@constants/constants';
import { ThemeContext } from 'contexts/theme-context';
import React, { useContext } from 'react';
import { Button, Text, ThemeName, YStack } from 'tamagui';

export function ThemeSelectorScreen(): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange(newTheme: ThemeName) {
    appStorage.set('theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <YStack
      f={1}
      jc='center'
      bg='$background'
    >
      <Button
        bg={'$background'}
        onPress={() => handleThemeChange(THEME.DARK as ThemeName)}
      >
        Dark Theme
      </Button>
      <Button
        bg={'$background'}
        onPress={() => handleThemeChange(THEME.LIGHT as ThemeName)}
      >
        Light Theme
      </Button>
      <Text>{theme}</Text>
    </YStack>
  );
}
