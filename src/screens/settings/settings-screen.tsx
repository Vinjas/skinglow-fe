import React from 'react';
import { Button, Text, YStack } from 'tamagui';

type SettingsScreenProps = {
  navigation: any;
};

export function SettingsScreen({ navigation }: SettingsScreenProps): JSX.Element {
  return (
    <YStack>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.navigate('ThemeSelectorScreen')}>Themes</Button>
    </YStack>
  );
}
