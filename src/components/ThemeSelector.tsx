import React from 'react';
import { Button, YStack, Text, ThemeName } from 'tamagui';
import { appStorage } from '../appStorage/appStorage';
import { THEME } from '../constants/constants';

interface ThemeSelectorProps {
  onThemeChange: (newTheme: ThemeName) => void;
}

export function ThemeSelector({ onThemeChange }: ThemeSelectorProps): JSX.Element {
  function handleThemeChange(newTheme: string) {
    appStorage.set('theme', newTheme);
    onThemeChange(newTheme as ThemeName);
  }

  return (
    <YStack
      f={1}
      ai='center'
      bg='$background'
    >
      <Text>Welcome to Tamagui!</Text>
      <Button
        bg={'$background'}
        onPress={() => handleThemeChange(THEME.DARK)}
      >
        Dark Theme
      </Button>
      <Button
        bg={'$background'}
        onPress={() => handleThemeChange(THEME.LIGHT)}
      >
        Light Theme
      </Button>
      <Text>{appStorage.getString('theme')}</Text>
    </YStack>
  );
}
