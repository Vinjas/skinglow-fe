import { appStorage } from '@app-storage/app-storage';
import { CURRENT_THEME } from '@constants/app-storage';
import { THEME } from '@constants/constants';
import { ThemeContext } from 'contexts/theme-context';
import React, { useContext } from 'react';
import { Button, Text, ThemeName, View, YStack } from 'tamagui';

export function ThemeSelectorScreen(): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange(newTheme: ThemeName) {
    appStorage.set(CURRENT_THEME, newTheme);
    setTheme(newTheme);
  }

  return (
    <View
      bg='$background'
      f={1}
    >
      <YStack
        jc='center'
        mx={'$4'}
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
    </View>
  );
}
