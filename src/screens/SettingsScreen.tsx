import { ThemeSelector } from '@components/ThemeSelector';
import React from 'react';
import { Text, ThemeName, YStack } from 'tamagui';

type SettingsScreenProps = {
  onThemeChange: (theme: ThemeName) => void;
};

export function SettingsScreen({ onThemeChange }: SettingsScreenProps): JSX.Element {
  return (
    <YStack>
      <Text>Settings Screen</Text>
      <ThemeSelector onThemeChange={onThemeChange} />
    </YStack>
  );
}
