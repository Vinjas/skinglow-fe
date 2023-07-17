import { appStorage } from '@app-storage/app-storage';
import { THEME } from '@constants/constants';
import React from 'react';
import { Button, Text, YStack } from 'tamagui';

export function ThemeSelectorScreen(): JSX.Element {
  function handleThemeChange(newTheme: string) {
    appStorage.set('theme', newTheme);
    //onThemeChange(newTheme as ThemeName);
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
